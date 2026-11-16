import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-control-select";
import type { HumidifierState } from "../../../data/humidifier";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { HumidifierToggleCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsHumidifierToggleCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiHumidifierToggleCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _formatters;
    private _config?;
    _currentState?: HumidifierState;
    static getStubConfig(): HumidifierToggleCardFeatureConfig;
    setConfig(config: HumidifierToggleCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _valueChanged;
    private _setState;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-toggle-card-feature": HuiHumidifierToggleCardFeature;
    }
}
export {};
