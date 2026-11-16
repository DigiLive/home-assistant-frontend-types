/**
 * How the warning closed: accepted, declined with Go back, its close button,
 * or Escape, or closed by something else, like navigating away.
 */
export type DebugConsoleWarningResult = "accepted" | "declined" | "closed";
export interface DebugConsoleWarningDialogParams {
    /** Called once the dialog is gone, with how it closed. */
    closedCallback: (result: DebugConsoleWarningResult) => void;
}
export declare const showDebugConsoleWarningDialog: (element: HTMLElement, dialogParams: DebugConsoleWarningDialogParams) => void;
