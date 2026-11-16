import type { Connection, UnsubscribeFunc } from "home-assistant-js-websocket";
import type { HomeAssistantApi, HomeAssistantConfig, LogFileDisabledReason } from "../types";
import type { HassioAddonInfo } from "./hassio/addon";
export interface LogProvider {
    key: string;
    name: string;
    addon?: HassioAddonInfo;
}
export declare const fetchErrorLog: (api: HomeAssistantApi) => Promise<string>;
export declare const subscribeIntegrationLog: (connection: Connection, integration: string, callback: (lines: string[]) => void) => Promise<UnsubscribeFunc>;
export declare const downloadIntegrationLog: (integration: string, lines: string[]) => void;
export declare const getErrorLogDownloadUrl: (config: HomeAssistantConfig) => string;
export declare const getCoreLogFileDownloadUnavailableReason: (config: HomeAssistantConfig) => LogFileDisabledReason | undefined;
