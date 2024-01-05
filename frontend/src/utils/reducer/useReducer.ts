/**
 * @author Hector Rodrigues da Silva
 */

import {Dispatch} from 'react';

interface IAction {
    value?: any,
    type?: string,
    obj?: string | undefined,
    attr?: string | undefined,
    payload?: Object | undefined
}

/**
 *
 * @param initialState
 */
export const init = (initialState: object) => {
    return initialState;
}

/**
 *
 * @param state
 * @param action
 */
export const reducer = (state, action: IAction) => {
    switch (action.type) {
        case 'set':
            return {...state, [action.attr]: action.value};
        case 'setObject':
            return {...state, [action.obj]: {...state[action.obj], [action.attr]: action.value}}
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

/**
 *
 * @param dispatch
 * @param attr
 * @param value
 * @param callback
 */
export const handleKeyState = (
    dispatch: Dispatch<IAction>, attr: string, value: any, callback: Function = () => {}
) => {
    dispatch({type: 'set', attr, value});
    return callback();
};

/**
 *
 * @param dispatch
 * @param obj
 * @param attr
 * @param value
 * @param callback
 */
export const handleKeyStateObject = (
    dispatch: Dispatch<IAction>, obj: string, attr: string, value: any, callback: Function = () => {}
) => {
    dispatch({type: 'setObject', obj, attr, value});
    return callback()
};

/**
 *
 * @param dispatch
 * @param payload
 * @param callback
 */
export const resetState = (dispatch: Dispatch<IAction>, payload: Object, callback: Function = () => {}) => {
    dispatch({type: 'reset', payload});
    return callback();
}