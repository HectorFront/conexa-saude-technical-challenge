/**
 * @author Hector Rodrigues da Silva
 * @class Socket
 */
export class Socket {

    constructor(url) {
        this._url = url;
        this._socket = null;
        this._reconnecting = () => {};
    }

    /**
     *
     * @returns {Promise<unknown>}
     */
    connect() {
        return new Promise((resolve, reject) => {
            this._socket = new WebSocket(this._url);
            this._socket.onopen = () => {
                console.log('[~Socket] = Connected')
                resolve(true);
            }
            this._socket.onerror = () => {
                console.log('[~Socket] = Error in connect');
                reject(false);
            }
            this._socket.onclose = () => {
                this._socket = null;
                console.log('[~Socket] = Reconnecting');
                this._reconnecting();
            };
        });
    }

    /**
     *
     * @param {Function} callback
     */
    onMessage(callback) {
        this._socket.onmessage = callback;
    }

    /**
     *
     * @param {*} message
     */
    send(message) {
        console.log('[~Socket] = Send ', message);
        const json = JSON.stringify(message);
        this._socket?.send(json);
    }

    /**
     *
     */
    close() {
        console.log('[~Socket] = Closed ');
        this._socket?.close();
    }

    /**
     * @param {Function} callback
     */
    set reconnecting(callback) {
        this._reconnecting = callback;
    }
}
