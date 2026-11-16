import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-spinner";
import type { ExtEntityRegistryEntry } from "../../../data/entity/entity_registry";
import "../../../panels/calendar/ha-full-calendar";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoCalendar extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    entry?: ExtEntityRegistryEntry | null;
    private _events;
    private _start?;
    private _end?;
    private _calendars;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeCalendars;
    private _calendarOptions;
    private _handleViewChanged;
    private _subscribe;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-calendar": MoreInfoCalendar;
    }
}
export {};
