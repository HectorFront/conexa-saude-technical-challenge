/** @name External */
import {AsyncStorage} from 'utils';
import {INITIAL_STATE_USER} from "context/user";

import * as ContextInterfaces from 'context/context.interfaces';

/**
 * @author Hector Rodrigues da Silva
 * @class Authentication
 */
export class Authentication {

    /**
     * s
     * @param token
     */
    static validateToken(token: string | boolean) {
        //
        // Token validation if contains endpoint for verification //
        //
        return token;
    }

    /**
     *
     * @param userContext
     */
    static logout(userContext: ContextInterfaces.UserContextProps) {
        userContext.handleToken(null);
        userContext.handleState(INITIAL_STATE_USER);
        AsyncStorage.clear();
    }
}