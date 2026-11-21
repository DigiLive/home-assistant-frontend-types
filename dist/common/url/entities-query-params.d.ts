import type { DataTableFiltersValues } from "../../data/data_table_filters";
import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const entitiesFilterQueryParamConfig: {
    readonly list: readonly ["status", "floor", "area", "device", "domain", "entity_domain", "label", "assistants", "config_entry", "sub_entry", "voice_assistant"];
};
export type EntitiesFilterQueryParams = QueryParamValues<typeof entitiesFilterQueryParamConfig>;
export declare const entitiesFilterQueryParams: (filters: DataTableFiltersValues) => EntitiesFilterQueryParams;
export declare const entitiesFilterQueryString: (filters: DataTableFiltersValues) => string;
export interface EntitiesLink {
    search: string;
    filters: DataTableFiltersValues;
}
export declare const entitiesLinkFromUrl: (searchParams: SearchParamsSource) => EntitiesLink | undefined;
