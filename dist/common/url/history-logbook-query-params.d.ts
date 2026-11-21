import type { HassServiceTarget } from "home-assistant-js-websocket";
import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export type HistoryLogbookTargetParamKey = "entity_id" | "label_id" | "floor_id" | "area_id" | "device_id";
export declare const historyLogbookTargetParamKeys: readonly HistoryLogbookTargetParamKey[];
export declare const historyLogbookQueryParamConfig: {
    readonly list: readonly HistoryLogbookTargetParamKey[];
    readonly date: readonly ["start_date", "end_date"];
    readonly boolean: readonly [{
        readonly key: "back";
        readonly trueValue: "1";
    }];
};
export type HistoryLogbookQueryParams = QueryParamValues<typeof historyLogbookQueryParamConfig>;
export declare const decodeHistoryLogbookQueryParams: (searchParams: SearchParamsSource) => HistoryLogbookQueryParams;
export declare const historyLogbookTargetFromQueryParams: (params: HistoryLogbookQueryParams) => HassServiceTarget | undefined;
export declare const historyLogbookTargetsEqual: (a: HassServiceTarget, b: HassServiceTarget) => boolean;
export declare const createHistoryLogbookUrl: (path: string, target: HassServiceTarget, startDate: Date, endDate: Date) => string;
