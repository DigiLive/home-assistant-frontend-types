import type { ConfigEntry } from "../../data/config_entries";
import type { DataEntryFlowDialogParams } from "./show-dialog-data-entry-flow";
import { loadDataEntryFlowDialog } from "./show-dialog-data-entry-flow";
export declare const loadOptionsFlowDialog: typeof loadDataEntryFlowDialog;
export declare const showOptionsFlowDialog: (element: HTMLElement, configEntry: ConfigEntry, dialogParams?: Omit<DataEntryFlowDialogParams, "flowConfig">) => void;
