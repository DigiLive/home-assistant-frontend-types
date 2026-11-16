import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const integrationsQueryParamConfig: {
    readonly string: readonly ["search"];
    readonly list: readonly ["status"];
};
export declare const integrationQueryParamConfig: {
    readonly string: readonly ["search"];
};
export type IntegrationsQueryParams = QueryParamValues<typeof integrationsQueryParamConfig>;
export interface IntegrationsState {
    search: string;
    showIgnored: boolean;
    showDisabled: boolean;
}
export declare const integrationsQueryParams: (state: IntegrationsState) => IntegrationsQueryParams;
export declare const integrationsLinkFromUrl: (searchParams: SearchParamsSource) => IntegrationsState | undefined;
export declare const integrationSearchFromUrl: (searchParams: SearchParamsSource) => string | undefined;
