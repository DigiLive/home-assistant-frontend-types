import type { ReactiveController, ReactiveControllerHost } from "lit";
import type { HomeAssistant } from "../types";
import type { Calendar, CalendarEvent } from "./calendar";
/**
 * Reactive controller that keeps live event subscriptions for a set of
 * calendars over a date range, and collects their events for rendering in
 * `ha-full-calendar`.
 */
export declare class CalendarEventsController implements ReactiveController {
    /** Events of all subscribed calendars. */
    events: CalendarEvent[];
    /** Calendars that failed to return events in their last update. */
    errorCalendars: string[];
    private _host;
    private _subscriptions;
    private _received;
    private _connected;
    constructor(host: ReactiveControllerHost);
    /** Whether there are subscriptions and every one has reported at least once. */
    get loaded(): boolean;
    hostConnected(): void;
    hostDisconnected(): void;
    /**
     * Subscribe the given calendars, replacing any existing subscription of them.
     * Does nothing while the host is disconnected, so a subscribe that was
     * awaiting `unsubscribeAll()` cannot outlive the host.
     */
    subscribe(hass: HomeAssistant, calendars: Calendar[], start: Date, end: Date): void;
    /** Unsubscribe one calendar and drop its events. */
    unsubscribe(entityId: string): void;
    /** Unsubscribe all calendars and drop their events. */
    unsubscribeAll(): Promise<void>;
    private _closeSubscription;
    private _removeCalendar;
    private _handleUpdate;
}
