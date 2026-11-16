import type { Connection } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
import type { DataEntryFlowProgress, DataEntryFlowStep } from "./data_entry_flow";
export declare const DISCOVERY_SOURCES: string[];
export declare const ATTENTION_SOURCES: string[];
export declare const createConfigFlow: (hass: HomeAssistant, handler: string, entry_id?: string) => Promise<DataEntryFlowStep>;
export declare const fetchConfigFlow: (hass: HomeAssistant, flowId: string) => Promise<DataEntryFlowStep>;
export declare const handleConfigFlowStep: (hass: HomeAssistant, flowId: string, data: Record<string, any>) => Promise<DataEntryFlowStep>;
export declare const ignoreConfigFlow: (hass: HomeAssistant, flowId: string, title: string) => Promise<unknown>;
export declare const deleteConfigFlow: (hass: Pick<HomeAssistant, "callApi">, flowId: string) => Promise<unknown>;
export declare const getConfigFlowHandlers: (hass: HomeAssistant, type?: "helper" | "integration") => Promise<string[]>;
export declare const fetchConfigFlowInProgress: (conn: Connection) => Promise<DataEntryFlowProgress[]>;
export type ConfigFlowInProgressMessage = {
    type: "removed";
    flow_id: string;
} | {
    type: null | "added";
    flow_id: string;
    flow: DataEntryFlowProgress;
};
export declare const subscribeConfigFlowInProgress: (hass: {
    connection: Connection;
}, onChange: (update: ConfigFlowInProgressMessage[]) => void) => Promise<() => Promise<void>>;
export declare const localizeConfigFlowTitle: (localize: LocalizeFunc, flow: DataEntryFlowProgress) => string;
