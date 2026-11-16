import type { EntityHistoryState, HistoryStates } from "../../../../data/history";
/** One line of the overview's activity timeline */
export interface ActivityEntry {
    state: string;
    when: Date;
    inZones?: string[];
    /** Zone detail: the person that arrived at or left the zone */
    personId?: string;
    arrived?: boolean;
}
export declare const ACTIVITY_MAX_ENTRIES = 20;
/**
 * A person's state changes inside the window, newest first. History starts
 * with the state at the window's start, which is not an event; no-location
 * samples are skipped so a dropout does not count as a change.
 */
export declare const personActivity: (history: EntityHistoryState[] | undefined, since: number) => ActivityEntry[];
/**
 * Arrivals at and departures from a zone by the given persons, newest first.
 */
export declare const zoneActivity: (history: HistoryStates | undefined, personIds: string[], zoneId: string, since: number) => ActivityEntry[];
