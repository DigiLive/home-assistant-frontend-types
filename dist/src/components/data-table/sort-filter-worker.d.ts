import type { ClonedDataTableColumnData, DataTableRowData, SortableColumnContainer, SortingDirection } from "./ha-data-table";
/**
 * Filters data with exact match priority and fuzzy fallback.
 * - First tries exact substring matching
 * - If exact matches found, returns only those
 * - If no exact matches, falls back to fuzzy search with strict scoring
 */
declare const filterData: (data: DataTableRowData[], columns: SortableColumnContainer, filter: string) => DataTableRowData[];
declare const sortData: (data: DataTableRowData[], column: ClonedDataTableColumnData, direction: SortingDirection, sortColumn: string, language?: string) => DataTableRowData[];
declare const api: {
    filterData: typeof filterData;
    sortData: typeof sortData;
};
export type Api = typeof api;
export {};
