const path = require('path')
const { DOCTOR_AUTH, FAKE_TOKEN } = require(path.join(__dirname, '../constants'))

/**
 *
 * @param email
 * @param password
 * @returns {boolean}
 */
const validateAuth = ({ email, password }) =>
  email === DOCTOR_AUTH.email && password === DOCTOR_AUTH.password

/**
 *
 * @param request
 * @param response
 * @returns {any}
 */
const login = (request, response) => {
  const { email, password } = request.body

  if (!validateAuth({ email, password }))
    return response.status(401).json({ message: 'Incorrect credentials' })

  return response.json({ name: DOCTOR_AUTH.name, token: FAKE_TOKEN })
}

/**
 *
 * @param token
 * @returns {boolean}
 */
const validateToken = token => [FAKE_TOKEN, `Bearer ${FAKE_TOKEN}`].includes(token)

/**
 *
 * @param req
 * @param res
 * @param next
 */
const authMiddleware = (req, res, next) => {
  console.log(req.headers)
  validateToken(req.headers.authorization)
    ? next()
    : res.status(403).json({ message: 'Invalid auth' })
}

module.exports = {login, authMiddleware}
