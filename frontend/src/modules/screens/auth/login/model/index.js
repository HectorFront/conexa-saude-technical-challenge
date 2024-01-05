import {ExecutorRequest} from "http/executor";
import {RequestUserLogin} from 'http/requests/auth';

export class ModelLogin {

    /**
     *
     * @param body
     * @returns {Promise<unknown>}
     */
    static userLogin(body) {
        return new Promise((resolve, reject) =>
            ExecutorRequest(new RequestUserLogin(body))
                .then(response => resolve(response))
                .catch(err => reject(err.status)))
    }

    /**
     *
     * @param data
     * @returns {{user, token: (*|string|Object|null)}}
     */
    static prepareDataUserContext(data) {
        const token = data.token;
        delete data.token;
        return {token, user: data};
    }
}