import type { DataTableColumnContainer, SortingDirection } from "../../components/data-table/ha-data-table";
import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const dataTableQueryParamConfig: {
    readonly string: readonly ["search", "sort", "direction", "group"];
};
export type DataTableQueryParams = QueryParamValues<typeof dataTableQueryParamConfig>;
export interface DataTableQueryState {
    search: string;
    sorting?: {
        column: string;
        direction: "asc" | "desc";
    };
    groupColumn?: string;
}
/**
 * Params for the table's state. Empty and default values are left out, and
 * grouping is only written for columns that have a name for the URL, so
 * internal column ids don't end up in links.
 */
export declare const dataTableQueryParamsFromState: (columns: DataTableColumnContainer, search: string, sortColumn: string | undefined, sortDirection: SortingDirection, groupColumn: string | undefined) => DataTableQueryParams;
/**
 * The table's state a link asks for, undefined when it has no table params so
 * what was picked before stays. A link replaces the search, a search left
 * behind would hide part of what it shows. Sorting and grouping it leaves out,
 * or that don't match a column, keep what was picked before.
 */
export declare const dataTableQueryStateFromUrl: (searchParams: SearchParamsSource, columns: DataTableColumnContainer) => DataTableQueryState | undefined;
