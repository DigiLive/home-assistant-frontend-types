import type { HassEntity } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../../common/translations/localize";
import type { LogbookEntry } from "../../data/logbook";
import type { TraceContexts } from "../../data/trace";
import type { HomeAssistant } from "../../types";
export type LogbookEntryCategory = "entity" | "automation" | "integration";
export declare const classifyLogbookEntry: (item: LogbookEntry) => LogbookEntryCategory;
export declare const isRunRow: (item: LogbookEntry) => boolean;
export type LogbookNameDetail = "none" | "entity" | "device" | "area";
export interface EntityDisplay {
    primary?: string;
    secondary?: string;
}
export declare const entityDisplay: (hass: HomeAssistant, entityId: string, nameDetail?: LogbookNameDetail) => EntityDisplay;
export declare const sameDay: (a?: LogbookEntry, b?: LogbookEntry) => boolean;
export declare const isSameLogbookEntry: (a: LogbookEntry, b: LogbookEntry) => boolean;
export declare const computeTraceLink: (traceContexts: TraceContexts, contextId?: string) => string | undefined;
export declare const computeRunTraceLink: (traceContexts: TraceContexts, row: LogbookEntry) => string | undefined;
export declare const nodeColor: (category: LogbookEntryCategory, historicStateObj: HassEntity | undefined) => string | undefined;
export type LogbookCauseType = "user" | "automation" | "script" | "state" | "scheduled" | "homeassistant" | "integration";
export interface LogbookCause {
    type: LogbookCauseType;
    name: string;
    userId?: string;
    systemUser?: boolean;
    entityId?: string;
    brandDomain?: string;
}
export declare const computeUserCause: (item: LogbookEntry, userIdToName: Record<string, string>, systemUserIds?: Set<string>) => LogbookCause | undefined;
export declare const computeContextCause: (hass: HomeAssistant, item: LogbookEntry) => LogbookCause | undefined;
export declare const computeLogbookCause: (hass: HomeAssistant, item: LogbookEntry, userIdToName: Record<string, string>, systemUserIds?: Set<string>) => LogbookCause | undefined;
export declare const computeCausePhrase: (localize: LocalizeFunc, cause: LogbookCause) => string;
export declare const isRunCause: (cause?: LogbookCause) => boolean;
export declare const computeRowCause: (hass: HomeAssistant, item: LogbookEntry, userIdToName: Record<string, string>, systemUserIds?: Set<string>) => LogbookCause | undefined;
export declare const computeLogbookCauseKey: (item: LogbookEntry, cause: LogbookCause | undefined, personUserIds: Set<string>) => string;
export type LogbookGlyph = {
    type: "state";
    stateObj: HassEntity;
    icon?: string;
} | {
    type: "automation";
    script: boolean;
} | {
    type: "brand";
    domain?: string;
    icon?: string;
};
export declare const computeLogbookGlyph: (item: LogbookEntry, category: LogbookEntryCategory, stateObj: HassEntity | undefined, domain: string | undefined) => LogbookGlyph;
export interface LogbookValue {
    text: string;
    type: "state" | "message";
}
export interface LogbookItem {
    category: LogbookEntryCategory;
    glyph: LogbookGlyph;
    entityId?: string;
    name?: string;
    context?: string;
    value?: LogbookValue;
    cause?: LogbookCause;
    when: number;
}
export interface BuildLogbookItemOptions {
    nameDetail?: LogbookNameDetail;
    userIdToName?: Record<string, string>;
    systemUserIds?: Set<string>;
}
export declare const computeLogbookItem: (hass: HomeAssistant, entry: LogbookEntry, opts?: BuildLogbookItemOptions) => LogbookItem;
