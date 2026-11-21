import type { LogbookActionCall } from "../../../../data/logbook";
import type { LogbookCause } from "../../../logbook/logbook-entry-model";
export interface ActionCallDetailDialogParams {
    call: LogbookActionCall;
    /** The translated name of the action. */
    name: string;
    /** What made the call, like an automation, a script, or a user. */
    cause?: LogbookCause;
    /** The user the call was made for, if that is not already the cause. */
    user?: LogbookCause;
    traceUrl?: string;
}
export declare const showActionCallDetailDialog: (element: HTMLElement, dialogParams: ActionCallDetailDialogParams) => void;
