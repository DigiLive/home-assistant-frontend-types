import type { RecurrenceRange } from "../../data/calendar";
export interface ConfirmEventDialogBoxParams {
    title: string;
    text?: string;
    confirmText?: string;
    recurring?: boolean;
    destructive?: boolean;
    confirm?: (recurrenceRange: RecurrenceRange) => void;
    cancel?: () => void;
}
export declare const loadGenericDialog: () => Promise<typeof import("./confirm-event-dialog-box")>;
export declare const showConfirmEventDialog: (element: HTMLElement, dialogParams: ConfirmEventDialogBoxParams) => Promise<RecurrenceRange>;
