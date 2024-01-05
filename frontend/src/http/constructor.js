/**
 * @author Hector Rodrigues da Silva
 */

export class ConstructorRequest {
    /**
     *
     * @param url
     * @param headers
     * @param method
     * @param payload
     */
    constructor(url = null, headers = null, method = null, payload = {}) {
        this._url = url;
        this._headers = headers;
        this._method = method;
        this._payload = payload;
    }

    /**
     *
     * @returns {*}
     */
    get url() {
        return this._url;
    }

    /**
     *
     * @returns {*}
     */
    get headers() {
        return this._headers;
    }

    /**
     *
     * @returns {*}
     */
    get method() {
        return this._method;
    }

    /**
     *
     * @returns {*}
     */
    get payload() {
        return this._payload;
    }
}