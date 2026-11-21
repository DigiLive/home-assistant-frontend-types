import type { HomeAssistant } from "../types";
import type { EntityRegistryEntry } from "./entity/entity_registry";
export interface Calendar {
    entity_id: string;
    name?: string;
    backgroundColor?: string;
    textColor?: string;
}
/** Object used to render a calendar event in fullcalendar. */
export interface CalendarEvent {
    title: string;
    start: string;
    end?: string;
    color?: string;
    contrastColor?: string;
    className?: string;
    calendar: string;
    eventData: CalendarEventData;
    [key: string]: any;
}
/** Data returned from the core APIs. */
export interface CalendarEventData {
    uid?: string;
    recurrence_id?: string;
    summary: string;
    dtstart: string;
    dtend: string;
    rrule?: string;
    description?: string;
    location?: string;
    status?: "confirmed" | "tentative";
}
export interface CalendarEventMutableParams {
    summary: string;
    dtstart: string;
    dtend: string;
    rrule?: string;
    description?: string;
    location?: string;
}
export declare enum RecurrenceRange {
    THISEVENT = "",
    THISANDFUTURE = "THISANDFUTURE"
}
export declare enum CalendarEntityFeature {
    CREATE_EVENT = 1,
    DELETE_EVENT = 2,
    UPDATE_EVENT = 4
}
/** Type for date values that can come from REST API or subscription */
type CalendarDateValue = string | {
    dateTime: string;
} | {
    date: string;
};
export declare const fetchCalendarEvents: (hass: HomeAssistant, start: Date, end: Date, calendars: Calendar[]) => Promise<{
    events: CalendarEvent[];
    errors: string[];
}>;
export declare const getCalendarColors: (color: string | null | undefined, index: number, computedStyles: CSSStyleDeclaration) => {
    backgroundColor: string;
    textColor?: string;
};
export declare const getCalendars: (hass: HomeAssistant, element: Element, entityRegistry?: EntityRegistryEntry[]) => Calendar[];
export declare const createCalendarEvent: (hass: HomeAssistant, entityId: string, event: CalendarEventMutableParams) => Promise<undefined>;
export declare const updateCalendarEvent: (hass: HomeAssistant, entityId: string, uid: string, event: CalendarEventMutableParams, recurrence_id?: string, recurrence_range?: RecurrenceRange) => Promise<undefined>;
export declare const deleteCalendarEvent: (hass: HomeAssistant, entityId: string, uid: string, recurrence_id?: string, recurrence_range?: RecurrenceRange) => Promise<undefined>;
/**
 * Calendar event data from both REST API and WebSocket subscription.
 * Both APIs use the same data format.
 */
export interface CalendarEventApiData {
    summary: string;
    start: CalendarDateValue;
    end: CalendarDateValue;
    description?: string | null;
    location?: string | null;
    uid?: string | null;
    recurrence_id?: string | null;
    rrule?: string | null;
    status?: "confirmed" | "tentative" | null;
    all_day?: boolean;
}
export interface CalendarEventSubscription {
    events: CalendarEventApiData[] | null;
}
export declare const subscribeCalendarEvents: (hass: HomeAssistant, entity_id: string, start: Date, end: Date, callback: (update: CalendarEventSubscription) => void) => Promise<() => Promise<void>>;
/**
 * Normalize calendar event data from API format to internal format.
 * Handles both REST API format (with dateTime/date objects) and subscription format (strings).
 * Converts to internal format with { dtstart, dtend, ... }
 */
export declare const normalizeSubscriptionEventData: (eventData: CalendarEventApiData, calendar: Calendar) => CalendarEvent | null;
export {};
