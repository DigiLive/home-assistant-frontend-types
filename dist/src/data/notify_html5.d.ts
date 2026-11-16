import type { HomeAssistant } from "../types";
export declare const getAppKey: (callWS: HomeAssistant["callWS"]) => Promise<Uint8Array<ArrayBuffer>>;
