import type { LogbookEntry } from "../../data/logbook";
import type { TraceContexts } from "../../data/trace";
export interface LogbookDetailDialogParams {
    entry: LogbookEntry;
    traceContexts?: TraceContexts;
    userIdToName?: Record<string, string>;
    systemUserIds?: Set<string>;
}
export declare const loadLogbookDetailDialog: () => Promise<typeof import("./dialog-logbook-detail")>;
export declare const showLogbookDetailDialog: (element: HTMLElement, params: LogbookDetailDialogParams) => void;
