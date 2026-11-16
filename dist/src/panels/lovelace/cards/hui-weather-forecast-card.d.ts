import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { WeatherForecastCardConfig } from "./types";
declare class HuiWeatherForecastCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): WeatherForecastCardConfig;
    private _config?;
    private _stateObj?;
    private _i18n;
    private _formatters;
    private _hassConfig;
    private _themes;
    private _connection?;
    private _forecastEvent?;
    private _subscribed?;
    private _dragScrollController;
    private _sizeController;
    private _needForecastSubscription;
    private _unsubscribeForecastEvents;
    private _subscribeForecastEvents;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getCardSize(): number;
    setConfig(config: WeatherForecastCardConfig): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _isForecastInteraction;
    private _groupForecastByDay;
    private _renderInlineDayGroupLabel;
    private _renderForecastItem;
    private _dayLabelForForecast;
    private _dayKeyForForecast;
    private _dayKeyFromDate;
    private _showValue;
    getGridOptions(): LovelaceGridOptions;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-weather-forecast-card": HuiWeatherForecastCard;
    }
}
export {};
