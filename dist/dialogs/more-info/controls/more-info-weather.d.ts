import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-relative-time";
import "../../../components/ha-spinner";
import "../../../components/ha-state-icon";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tab-group";
import "../../../components/ha-tab-group-tab";
import "../../../components/ha-tooltip";
import type { WeatherEntity } from "../../../data/weather";
declare class MoreInfoWeather extends LitElement {
    stateObj?: WeatherEntity;
    private _i18n;
    private _formatters;
    private _config;
    private _connection;
    private _forecastEvent?;
    private _forecastType?;
    private _subscribed?;
    private _subscribedTo?;
    private _dragScrollController;
    private _unsubscribeForecastEvents;
    private _updateForecastSubscription;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(_changedProps: PropertyValues<this>): void;
    private _supportedForecasts;
    private _selectedForecastType;
    private _groupForecastByDay;
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
