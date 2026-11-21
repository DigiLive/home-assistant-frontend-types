import type { DataEntryFlowDialogParams } from "./show-dialog-data-entry-flow";
import { loadDataEntryFlowDialog } from "./show-dialog-data-entry-flow";
export declare const loadConfigFlowDialog: typeof loadDataEntryFlowDialog;
export declare const showConfigFlowDialog: (element: HTMLElement, dialogParams: Omit<DataEntryFlowDialogParams, "flowConfig"> & {
    entryId?: string;
}) => void;
