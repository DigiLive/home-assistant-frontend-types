import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, TargetHumidityCardFeatureConfig } from "./types";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-number-buttons";
export declare const supportsTargetHumidityCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiTargetHumidityCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _api;
    private _formatters;
    private _locale?;
    private _config?;
    private _targetHumidity?;
    private _pendingSync;
    static getStubConfig(): TargetHumidityCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: TargetHumidityCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _syncTargetHumidity;
    private get _min();
    private get _max();
    private _valueChanged;
    private _callService;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-target-humidity-card-feature": HuiTargetHumidityCardFeature;
    }
}
export {};
