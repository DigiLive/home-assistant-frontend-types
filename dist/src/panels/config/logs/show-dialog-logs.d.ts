export interface LogsDialogParams {
    provider: string;
    title: string;
    filter?: string;
}
export declare const showLogsDialog: (element: HTMLElement, dialogParams: LogsDialogParams) => void;
