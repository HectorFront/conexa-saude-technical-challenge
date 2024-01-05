/**
 * @author Hector Rodrigues da Silva
 */

import {ConstructorRequest} from '../../constructor';
import {APIRoutes} from "../../../constants/api/routes";

export class RequestRegisterSchedule extends ConstructorRequest {
    /**
     *
     * @param body
     */
    constructor(body) {
        const url = APIRoutes.SCHEDULES;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        super(url, headers, 'POST', body);
    }
}