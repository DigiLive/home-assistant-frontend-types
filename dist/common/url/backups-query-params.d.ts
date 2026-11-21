import type { DataTableFiltersValues } from "../../data/data_table_filters";
import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const BACKUP_TYPE_FILTER = "ha-filter-states";
export declare const BACKUP_LOCATIONS_FILTER = "backup-locations";
export declare const backupsFilterQueryParamConfig: {
    readonly list: readonly ["type", "location"];
};
export type BackupsFilterQueryParams = QueryParamValues<typeof backupsFilterQueryParamConfig>;
export declare const backupsFilterQueryParams: (filters: DataTableFiltersValues) => BackupsFilterQueryParams;
export declare const backupsFilterQueryString: (filters: DataTableFiltersValues) => string;
export interface BackupsLink {
    search: string;
    filters: DataTableFiltersValues;
}
export declare const backupsLinkFromUrl: (searchParams: SearchParamsSource) => BackupsLink | undefined;
