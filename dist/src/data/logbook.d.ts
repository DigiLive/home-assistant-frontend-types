import type { HassEntity, UnsubscribeFunc } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
export declare const CONTINUOUS_DOMAINS: string[];
export interface LogbookStreamMessage {
    events: LogbookEntry[];
    start_time?: number;
    end_time?: number;
    partial?: boolean;
}
export interface LogbookEntry {
    when: number;
    name?: string;
    message?: string;
    entity_id?: string;
    icon?: string;
    source?: string;
    domain?: string;
    item_id?: string;
    run_id?: string;
    state?: string;
    attributes?: {
        event_type?: string;
    };
    context_id?: string;
    context_user_id?: string;
    context_event_type?: string;
    context_domain?: string;
    context_service?: string;
    context_entity_id?: string;
    context_entity_id_name?: string;
    context_name?: string;
    context_state?: string;
    context_source?: string;
    context_message?: string;
}
export interface LogbookActionCall extends Pick<LogbookEntry, "context_user_id" | "context_event_type" | "context_domain" | "context_service" | "context_entity_id" | "context_name" | "context_state" | "context_source" | "context_message"> {
    when: number;
    domain: string;
    service: string;
    service_data: Record<string, unknown>;
    context_id: string;
}
export declare const getLogbookDataForContext: (hass: HomeAssistant, startDate: string, contextId?: string) => Promise<LogbookEntry[]>;
export declare const getLogbookDataFromServer: (hass: HomeAssistant, startDate: string, endDate?: string, entityIds?: string[], contextId?: string, deviceIds?: string[]) => Promise<LogbookEntry[]>;
export declare const getLogbookActionCalls: (hass: Pick<HomeAssistant, "callWS">, startDate: string, endDate: string) => Promise<LogbookActionCall[]>;
export declare const subscribeLogbook: (hass: HomeAssistant, callbackFunction: (message: LogbookStreamMessage, subscriptionId: number) => void, startDate: string, endDate: string, subscriptionId: number, entityIds?: string[], deviceIds?: string[]) => Promise<UnsubscribeFunc>;
export declare const createHistoricState: (currentStateObj: HassEntity, state?: string) => HassEntity;
export declare const localizeTriggerSource: (localize: LocalizeFunc, source: string | null) => string;
export type TriggerPlatform = "state" | "numeric_state" | "time" | "time_pattern" | "event" | "homeassistant";
export interface ParsedTriggerSource {
    platform?: TriggerPlatform;
    entityId?: string;
}
export declare const parseTriggerSource: (source: string) => ParsedTriggerSource;
export declare const localizeStateMessage: (hass: HomeAssistant, state: string, stateObj: HassEntity, domain: string, entry?: LogbookEntry) => string;
export declare const filterLogbookCompatibleEntities: (entity: any) => boolean;
export type LogbookCauseGroup = "automation" | "script" | "integration" | "other";
export declare const LOGBOOK_CAUSE_GROUPS: LogbookCauseGroup[];
export declare const logbookUserCauseKey: (userId: string) => string;
