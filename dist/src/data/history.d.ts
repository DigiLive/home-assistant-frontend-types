import type { HassEntity } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
import { type Statistics, type StatisticsMetaData } from "./recorder";
export interface LineChartState {
    state: string;
    last_changed: number;
    attributes?: Record<string, any>;
}
export interface LineChartEntity {
    domain: string;
    name: string;
    entity_id: string;
    states: LineChartState[];
    statistics?: LineChartState[];
}
export interface LineChartUnit {
    unit: string;
    device_class?: string;
    identifier: string;
    data: LineChartEntity[];
}
export interface TimelineState {
    state_localize: string;
    state: string;
    last_changed: number;
}
export interface TimelineEntity {
    name: string;
    entity_id: string;
    data: TimelineState[];
}
export interface HistoryResult {
    line: LineChartUnit[];
    timeline: TimelineEntity[];
}
export type HistoryStates = Record<string, EntityHistoryState[]>;
export interface EntityHistoryState {
    /** state */
    s: string;
    /** attributes */
    a?: Record<string, any>;
    /** last_changed; if set, also applies to lu */
    lc?: number;
    /** last_updated */
    lu: number;
}
export interface HistoryStreamMessage {
    states: HistoryStates;
    start_time?: number;
    end_time?: number;
}
export declare const entityIdHistoryNeedsAttributes: (hass: Pick<HomeAssistant, "states">, entityId: string) => boolean;
export declare const fetchDateWS: (hass: Pick<HomeAssistant, "states" | "callWS">, startTime: Date, endTime: Date, entityIds: string[], options?: {
    minimalResponse?: boolean;
}) => Promise<HistoryStates>;
export declare const countHistoryStates: (history: HistoryStates) => number;
/** How long a live update may wait: none for a small history, else the time one chart pixel covers (1 s to `maxDelay`) */
export declare const computeHistoryUpdateDelay: (stateCount: number, timespanMs: number, chartPixels: number, maxDelay: number) => number;
export declare const subscribeHistory: (hass: HomeAssistant, callbackFunction: (data: HistoryStates) => void, startTime: Date, endTime: Date, entityIds: string[]) => Promise<() => Promise<void>>;
export declare class HistoryStream {
    hoursToShow?: number;
    combinedHistory: HistoryStates;
    constructor(hoursToShow?: number);
    processMessage(streamMessage: HistoryStreamMessage): HistoryStates;
}
export declare const subscribeHistoryStatesTimeWindow: (hass: Pick<HomeAssistant, "connection" | "states">, callbackFunction: (data: HistoryStates) => void, hoursToShow: number, entityIds: string[], noAttributes?: boolean, minimalResponse?: boolean, significantChangesOnly?: boolean) => Promise<() => Promise<void>>;
export declare const convertStatisticsToHistory: (hass: HomeAssistant, statistics: Statistics, statisticIds: string[], splitDeviceClasses?: boolean, statisticsMetadata?: Record<string, StatisticsMetaData>) => HistoryResult;
export declare const limitedHistoryFromStateObj: (state: HassEntity) => EntityHistoryState[];
export declare const computeHistory: (hass: HomeAssistant, stateHistory: HistoryStates, entityIds: string[], localize: LocalizeFunc, splitDeviceClasses?: boolean, forceNumeric?: boolean) => HistoryResult;
export declare const computeGroupKey: (unit: string | undefined, device_class: string | undefined, splitDeviceClasses: boolean) => string;
export declare const isNumericEntity: (domain: string, currentState: HassEntity | undefined, numericStateFromHistory: EntityHistoryState | undefined, forceNumeric?: boolean) => boolean;
export declare const isTimelineEntity: (domain: string, currentState: HassEntity | undefined) => boolean;
export declare const mergeHistoryResults: (historyResult: HistoryResult, ltsResult?: HistoryResult, splitDeviceClasses?: boolean) => HistoryResult;
