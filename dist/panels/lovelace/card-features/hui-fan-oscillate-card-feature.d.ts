import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-control-select";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { FanOscillateCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsFanOscilatteCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiFanOscillateCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _config?;
    _oscillate?: boolean;
    static getStubConfig(): FanOscillateCardFeatureConfig;
    setConfig(config: FanOscillateCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _valueChanged;
    private _updateOscillate;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-fan-oscillate-card-feature": HuiFanOscillateCardFeature;
    }
}
export {};
