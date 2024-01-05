/**
 * @author: Hector Rodrigues da Silva
 * @github: https://github.com/HectorFront/templates-observables
 */

type IdEventProp = number | string;
type IdListenerProp = number | string;
type FnListenerProp = Function | undefined;

export class Observable {

    _listeners: any[];

    constructor() {
        this._listeners = [];
    }

    /**
     *
     * @param id
     * @param fn
     */
    subscribe(id: IdListenerProp, fn: FnListenerProp) {
        console.log(`[~Subscribe] => ${id}`);
        this._listeners.push({id, fn});
    }

    /**
     *
     * @returns {*[]}
     */
    unsubscribeAll() {
        console.log('[~Clear] => All observers');
        this._listeners = [];
    }

    /**
     *
     *
     * @param fn
     */
    unsubscribe(fn: FnListenerProp) {
        console.log(`[~Clear] => Observer`);
        this._listeners = this._listeners.filter(listener => listener.fn !== fn);
    }

    /**
     *
     * @param id
     * @param data
     */
    notify(id: IdEventProp, data: any) {
        this._listeners.forEach(listener => {
            if(listener.id === id) {
                return listener.fn(data);
            }
        });
    }
}