import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-spinner";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, PrecipitationForecastCardFeatureConfig } from "./types";
export declare const supportsPrecipitationForecastCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiPrecipitationForecastCardFeature extends LitElement implements LovelaceCardFeature {
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
    static getStubConfig(): PrecipitationForecastCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: PrecipitationForecastCardFeatureConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    private _shouldResubscribe;
    private _referenceMaxAmount;
    private _resolvedForecastType;
    private get _showLabels();
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderDailyBars;
    private _renderHourlyBars;
    private _unsubscribeForecast;
    private _subscribeForecast;
    static styles: import("lit").CSSResultGroup[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-precipitation-forecast-card-feature": HuiPrecipitationForecastCardFeature;
    }
}
export {};
