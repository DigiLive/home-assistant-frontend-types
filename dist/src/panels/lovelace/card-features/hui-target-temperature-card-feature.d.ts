import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-number-buttons";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, TargetTemperatureCardFeatureConfig } from "./types";
export declare const supportsTargetTemperatureCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiTargetTemperatureCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _api;
    private _formatters;
    private _locale?;
    private _hassConfig?;
    private _config?;
    private _targetTemperature;
    private _pendingSync;
    static getStubConfig(): TargetTemperatureCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: TargetTemperatureCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _syncTargetTemperature;
    private get _step();
    private get _min();
    private get _max();
    private _valueChanged;
    private _debouncedCallService;
    private _callService;
    private _supportsTarget;
    private _supportsTargetRange;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-target-temperature-card-feature": HuiTargetTemperatureCardFeature;
    }
}
export {};
