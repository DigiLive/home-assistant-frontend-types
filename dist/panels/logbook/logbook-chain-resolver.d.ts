import type { LogbookEntry } from "../../data/logbook";
import type { HomeAssistant } from "../../types";
import type { LogbookCause } from "./logbook-entry-model";
export interface LogbookChain {
    rows: LogbookEntry[];
    runRow?: LogbookEntry;
    origins: LogbookCause[];
    syntheticRun?: LogbookCause;
    triggerRow?: LogbookEntry;
}
export type LogbookFetcher = (startDate: string, endDate?: string, entityIds?: string[], contextId?: string) => Promise<LogbookEntry[]>;
interface ResolveOptions {
    userIdToName?: Record<string, string>;
    systemUserIds?: Set<string>;
}
export declare const resolveLogbookChain: (hass: HomeAssistant, entry: LogbookEntry, options?: ResolveOptions, fetchEvents?: LogbookFetcher) => Promise<LogbookChain>;
export {};
