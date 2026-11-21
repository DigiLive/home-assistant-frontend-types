import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const DEFAULT_LOG_PROVIDER = "core";
export declare const logSearchQueryParamConfig: {
    readonly string: readonly ["search", "filter"];
};
export declare const logsQueryParamConfig: {
    readonly string: readonly ["provider", "search", "filter"];
    readonly list: readonly ["integration"];
    readonly boolean: readonly [{
        readonly key: "raw";
        readonly trueValue: "1";
    }];
};
export type LogsQueryParams = QueryParamValues<typeof logsQueryParamConfig>;
export interface LogsState {
    provider: string;
    search: string;
    integrations: string[];
    raw: boolean;
}
export declare const DEFAULT_LOGS_STATE: LogsState;
export declare const logSearchFromUrl: (searchParams: SearchParamsSource) => string;
export declare const logsQueryParams: (state: LogsState) => LogsQueryParams;
export declare const logsLinkFromUrl: (searchParams: SearchParamsSource) => LogsState | undefined;
