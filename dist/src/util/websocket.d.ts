import type { Connection, MessageBase } from "home-assistant-js-websocket";
export declare const setDebugConnection: (debug: boolean) => void;
export declare const callWS: <T>(connection: Connection, msg: MessageBase) => Promise<T>;
