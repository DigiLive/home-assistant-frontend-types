import type { DataTableFilters } from "../../data/data_table_filters";
import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const scriptsFilterQueryParamConfig: {
    readonly list: readonly ["floor", "area", "device", "entity", "label", "category", "assistants", "blueprint"];
};
export type ScriptsFilterQueryParams = QueryParamValues<typeof scriptsFilterQueryParamConfig>;
export declare const scriptsFilterQueryParams: (filters: DataTableFilters) => ScriptsFilterQueryParams;
export declare const scriptsFilterQueryString: (filters: DataTableFilters) => string;
export interface ScriptsLink {
    search: string;
    filters: DataTableFilters;
}
export declare const scriptsLinkFromUrl: (searchParams: SearchParamsSource) => ScriptsLink | undefined;
