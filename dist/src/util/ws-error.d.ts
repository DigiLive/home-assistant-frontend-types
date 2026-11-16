/**
 * Error payload sent by Core's websocket API, with a string code from
 * `websocket_api/const.py` such as `not_found` or `unknown_error`.
 *
 * This is also the shape Core embeds in subscription messages, so it is not
 * specific to rejected commands.
 */
export interface WebSocketError {
    code: string;
    message: string;
}
/**
 * True when a failed `callWS` or `subscribeMessage` was rejected with this Core
 * error code, such as `not_found`.
 */
export declare const isWsErrorCode: (err: unknown, code: string) => boolean;
/**
 * Best-effort message for a failed `callWS` or `subscribeMessage`, falling back
 * to a genuine `Error` or string for anything else caught alongside it.
 *
 * Returns `undefined` when no message is available.
 */
export declare const getWsErrorMessage: (err: unknown) => string | undefined;
