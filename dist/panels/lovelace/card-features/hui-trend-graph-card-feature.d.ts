import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import "../components/hui-graph-base";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { TrendGraphCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsTrendGraphCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
export declare const DEFAULT_HOURS_TO_SHOW = 24;
declare class HuiHistoryChartCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _config?;
    private _stateObj?;
    private _hassConfig?;
    private _localize;
    private _connection?;
    private _states?;
    private _coordinates?;
    private _yAxisOrigin?;
    private _loading;
    private _error?;
    private _subscribed?;
    private _interval?;
    private _stateHistory?;
    private _resizeController;
    static getStubConfig(): TrendGraphCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: TrendGraphCardFeatureConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    private _calculateCoordinates;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _unsubscribeHistory;
    protected updated(changedProps: PropertyValues): void;
    private _subscribeHistory;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-trend-graph-card-feature": HuiHistoryChartCardFeature;
    }
}
export {};
