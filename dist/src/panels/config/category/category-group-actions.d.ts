import type { DataTableGroupActions } from "../../../components/data-table/ha-data-table";
import type { CategoryRegistryEntry } from "../../../data/category_registry";
import "./ha-category-group-actions";
export declare const categoryGroupActions: (scope: string, categories: CategoryRegistryEntry[] | undefined, grouping: string | undefined, onDeleted: (categoryId: string) => void) => DataTableGroupActions | undefined;
