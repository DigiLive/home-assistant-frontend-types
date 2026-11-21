import type { DataTableFilters } from "../../data/data_table_filters";
import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const automationsFilterQueryParamConfig: {
    readonly list: readonly ["floor", "area", "device", "entity", "label", "category", "assistants", "blueprint"];
};
export type AutomationsFilterQueryParams = QueryParamValues<typeof automationsFilterQueryParamConfig>;
export declare const automationsFilterQueryParams: (filters: DataTableFilters) => AutomationsFilterQueryParams;
export declare const automationsFilterQueryString: (filters: DataTableFilters) => string;
export interface AutomationsLink {
    search: string;
    filters: DataTableFilters;
}
export declare const automationsLinkFromUrl: (searchParams: SearchParamsSource) => AutomationsLink | undefined;
