/**
 * @author Hector Rodrigues da Silva
 */

/**
 *
 * @param Request
 * @returns {Promise<any>}
 * @constructor
 */
export const ExecutorRequest = Request => {
    const options = Request.method.includes('GET') ? {} : {
        method: Request.method,
        headers: Request.headers,
        body: JSON.stringify(Request.payload)
    };
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/${Request.url}`, options);
        if (response.status >= 200 && response.status <= 299) {
            const jsonResponse = await response.json();
            resolve(jsonResponse);
        } else {
            reject(response);
        }
    });
};