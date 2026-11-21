import type { RepairsIssue } from "../../data/repairs";
import type { DataEntryFlowDialogParams } from "../config-flow/show-dialog-data-entry-flow";
import { loadDataEntryFlowDialog } from "../config-flow/show-dialog-data-entry-flow";
import "./dialog-repairs-issue-subtitle";
export declare const loadRepairFlowDialog: typeof loadDataEntryFlowDialog;
export declare const showRepairsFlowDialog: (element: HTMLElement, issue: RepairsIssue, dialogParams?: Omit<DataEntryFlowDialogParams, "flowConfig">) => void;
