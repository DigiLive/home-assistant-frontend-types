import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-spinner";
import type { HomeAssistant } from "../../../types";
import "../components/hui-graph-base";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, TemperatureForecastCardFeatureConfig } from "./types";
export declare const supportsTemperatureForecastCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiTemperatureForecastCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _locale?;
    private _connection;
    private _hassConfig?;
    private _config?;
    private _forecast?;
    private _error?;
    private _subscribed?;
    private _subscribedType?;
    private _size;
    static getStubConfig(): TemperatureForecastCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: TemperatureForecastCardFeatureConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    private _shouldResubscribe;
    private _resolvedForecastType;
    private get _showLabels();
    private _toCelsius;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderBars;
    private _unsubscribeForecast;
    private _computeHourly;
    private _subscribeForecast;
    static styles: import("lit").CSSResultGroup[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-temperature-forecast-card-feature": HuiTemperatureForecastCardFeature;
    }
}
export {};
