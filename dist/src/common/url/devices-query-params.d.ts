import type { DataTableFilters } from "../../data/data_table_filters";
import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const devicesFilterQueryParamConfig: {
    readonly list: readonly ["status", "floor", "area", "domain", "label", "config_entry", "sub_entry"];
};
export type DevicesFilterQueryParams = QueryParamValues<typeof devicesFilterQueryParamConfig>;
export declare const devicesFilterQueryParams: (filters: DataTableFilters) => DevicesFilterQueryParams;
export declare const devicesFilterQueryString: (filters: DataTableFilters) => string;
export interface DevicesLink {
    search: string;
    filters: DataTableFilters;
}
export declare const devicesLinkFromUrl: (searchParams: SearchParamsSource) => DevicesLink | undefined;
