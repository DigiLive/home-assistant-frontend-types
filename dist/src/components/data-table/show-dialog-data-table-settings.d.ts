import type { DataTableColumnContainer } from "./ha-data-table";
export interface DataTableSettingsDialogParams {
    columns: DataTableColumnContainer;
    onUpdate: (columnOrder: string[] | undefined, hiddenColumns: string[] | undefined) => void;
    hiddenColumns?: string[];
    columnOrder?: string[];
}
export declare const loadDataTableSettingsDialog: () => Promise<typeof import("./dialog-data-table-settings")>;
export declare const showDataTableSettingsDialog: (element: HTMLElement, dialogParams: DataTableSettingsDialogParams) => void;
