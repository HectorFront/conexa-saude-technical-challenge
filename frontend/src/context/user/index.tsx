/**
 * @author Hector Rodrigues da Silva
 */

/** @name Dependencies */
import {createContext, useState, useReducer, ElementType, ReactNode, useCallback, useEffect} from 'react';
/** @name Internal */
import * as ContextInterfaces from '../context.interfaces';
/** @name External */
import {AsyncStorage} from "utils";
import {Authentication} from "services/user/authentication";
import {reducer, handleKeyState, resetState, handleKeyStateObject} from 'utils/reducer/useReducer';

/** @name Constants */
export const INITIAL_STATE_USER: ContextInterfaces.UserStateProps = { name: null };
export const UserContext = createContext<ContextInterfaces.UserContextProps>({
    state: INITIAL_STATE_USER,
    token: null,
    handleToken: () => {},
    handleState: () => {},
    handleKeyState: () => {},
    handleKeyStateObject: () => {}
});

type UserProviderProps = {
    children: ReactNode
}

/**
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const UserProvider: ElementType = ({children}: UserProviderProps): JSX.Element => {

    const [token, setToken] = useState(null);
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE_USER);

    /**
     *
     * @param userState
     */
    const handleState = useCallback((userState) => {
        AsyncStorage.setObject(process.env.REACT_APP_USER_STORAGE, userState);
        return resetState(dispatch, userState);
    },[]);

    /**
     *
     * @param token
     */
    const handleToken = useCallback((token) => {
        AsyncStorage.set(process.env.REACT_APP_USER_TOKEN_STORAGE, token);
        return setToken(token)
    },[]);

    useEffect(() => {
        const userStorage = AsyncStorage.getObject(process.env.REACT_APP_USER_STORAGE);
        const tokenStorage = AsyncStorage.get(process.env.REACT_APP_USER_TOKEN_STORAGE);
        const userAuthenticated = Authentication.validateToken(tokenStorage);

        if(userAuthenticated) {
            setToken(tokenStorage);
            handleState(userStorage);
        }
    },[]);

    return (
        <UserContext.Provider
            value={{
                state,
                token,
                handleToken,
                handleState,
                handleKeyState: ({key, value}) => handleKeyState(dispatch, key, value),
                handleKeyStateObject: ({obj, key, value}) => handleKeyStateObject(dispatch, obj, key, value)
            }}
        >
            {children}
        </UserContext.Provider>
    )
}