import type { DataTableFilters } from "../../data/data_table_filters";
import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const scenesFilterQueryParamConfig: {
    readonly list: readonly ["floor", "area", "device", "entity", "label", "category", "assistants"];
};
export type ScenesFilterQueryParams = QueryParamValues<typeof scenesFilterQueryParamConfig>;
export declare const scenesFilterQueryParams: (filters: DataTableFilters) => ScenesFilterQueryParams;
export declare const scenesFilterQueryString: (filters: DataTableFilters) => string;
export interface ScenesLink {
    search: string;
    filters: DataTableFilters;
}
export declare const scenesLinkFromUrl: (searchParams: SearchParamsSource) => ScenesLink | undefined;
