/**
 * @author Hector Rodrigues da Silva
 * @class AsyncStorage
 */
export class AsyncStorage {
    /**
     *
     * @param {String} key
     * @param {*} value
     */
    static set(key: string, value: string) {
        return localStorage.setItem(window.btoa(String(key)), window.btoa(String(value)));
    }

    /**
     *
     * @param {String} key
     * @returns {*} Value
     */
    static get(key: string) {
        const values: string | boolean = localStorage.getItem(window.btoa(String(key)));
        return values ? window.atob(values) : values;
    }

    /**
     *
     * @param {String} key
     * @param {Object} value
     */
    static setObject(key: string, value: string) {
        return localStorage.setItem(window.btoa(String(key)), window.btoa(JSON.stringify(value)));
    }

    /**
     *
     * @param {String} key
     * @returns {Object} value
     */
    static getObject(key: string) {
        const values: string | boolean = localStorage.getItem(window.btoa(String(key)));
        return JSON.parse(values ? window.atob(values) : values);
    }

    /**
     *
     * @param {String} key
     */
    static removeItem(key: string) {
        return localStorage.removeItem(window.btoa(String(key)));
    }

    /**
     *
     */
    static clear() {
        return localStorage.clear();
    }
}
