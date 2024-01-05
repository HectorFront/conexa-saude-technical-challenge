const path = require('path')
const jsonServer = require('json-server')
const { dataSchedules, registerSchedules } = require(path.join(__dirname, './Handlers/schedules'))
const { login, authMiddleware } = require(path.join(__dirname, './Handlers/auth'))

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', login);
server.post('/consultations', registerSchedules);
server.get('/consultations', dataSchedules);

server.use(authMiddleware)

server.use(router)
server.listen(process.env.PORT || 3333, () => {
  console.log('JSON Server is running<>>', 'http://localhost:3333')
});
