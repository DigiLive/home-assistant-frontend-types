import type { DataTableFiltersValues } from "../../data/data_table_filters";
import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const helpersFilterQueryParamConfig: {
    readonly list: readonly ["floor", "area", "device", "label", "category", "assistants", "voice_assistant"];
};
export type HelpersFilterQueryParams = QueryParamValues<typeof helpersFilterQueryParamConfig>;
export declare const helpersFilterQueryParams: (filters: DataTableFiltersValues) => HelpersFilterQueryParams;
export declare const helpersFilterQueryString: (filters: DataTableFiltersValues) => string;
export interface HelpersLink {
    search: string;
    filters: DataTableFiltersValues;
}
export declare const helpersLinkFromUrl: (searchParams: SearchParamsSource) => HelpersLink | undefined;
