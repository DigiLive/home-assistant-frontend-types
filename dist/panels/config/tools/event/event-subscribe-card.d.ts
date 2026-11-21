import type { TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-button-next";
import "../../../../components/ha-icon-button-prev";
import "../../../../components/ha-icon-button-last";
import "../../../../components/ha-icon-button-first";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import "../../../../components/ha-yaml-editor";
import "../../../../components/input/ha-input";
import type { HomeAssistant } from "../../../../types";
declare class EventSubscribeCard extends LitElement {
    hass?: HomeAssistant;
    narrow: boolean;
    selectedEventType: string;
    private _eventType;
    private _subscribed?;
    private _eventFilter;
    private _events;
    private _error?;
    private _viewedEventId?;
    private _eventCount;
    _ignoredEventsCount: number;
    disconnectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _renderEventsCard;
    private _resolveViewedIndex;
    private _showOldest;
    private _showOlder;
    private _showNewest;
    private _showNewer;
    private _valueChanged;
    private _filterChanged;
    private _testEventFilter;
    private _startOrStopListening;
    private _clearEvents;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "event-subscribe-card": EventSubscribeCard;
    }
}
export {};
