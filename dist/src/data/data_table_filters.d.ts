export interface DataTableFilter {
    value: DataTableFiltersValue;
    items: Set<string> | undefined;
}
export type DataTableFilters = Record<string, DataTableFilter>;
export type DataTableFiltersValue = string[] | Record<"key" | string, string[]> | undefined;
export type DataTableFiltersValues = Record<string, DataTableFiltersValue>;
export type DataTableFiltersItems = Record<string, Set<string> | undefined>;
export declare const serializeFilters: (value: DataTableFilters) => {};
export declare const deserializeFilters: (value: DataTableFilters) => {};
export declare const isFilterUsed: (key: string, filter: DataTableFilter, filterName: string) => number | false;
export declare const isRelatedItemsFilterUsed: (key: string, filter: DataTableFilter, filterName: string | string[]) => Set<string>;
