import {ExecutorRequest} from "http/executor";
import {RequestDataSchedules} from 'http/requests/schedules';

export class ModelHome {

    /**
     *
     * @returns {Promise<unknown>}
     */
    static dataSchedules() {
        return new Promise((resolve, reject) =>
            ExecutorRequest(new RequestDataSchedules())
                .then(response => resolve(response))
                .catch(err => reject(err.status)))
    }
}