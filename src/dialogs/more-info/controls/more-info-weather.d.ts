import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-relative-time";
import "../../../components/ha-state-icon";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import "../../../components/sl-tab-group";
import type { WeatherEntity } from "../../../data/weather";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoWeather extends LitElement {
    hass: HomeAssistant;
    stateObj?: WeatherEntity;
    private _forecastEvent?;
    private _forecastType?;
    private _subscribed?;
    private _dragScrollController;
    private _unsubscribeForecastEvents;
    private _subscribeForecastEvents;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues): void;
    private _supportedForecasts;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleForecastTypeChanged;
    static get styles(): CSSResultGroup;
    private _showValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-weather": MoreInfoWeather;
    }
}
export {};
