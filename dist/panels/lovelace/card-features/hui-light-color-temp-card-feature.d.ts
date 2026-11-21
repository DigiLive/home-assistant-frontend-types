import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LightColorTempCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsLightColorTempCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiLightColorTempCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _locale?;
    private _config?;
    static getStubConfig(): LightColorTempCardFeatureConfig;
    setConfig(config: LightColorTempCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _generateTemperatureGradient;
    private _valueChanged;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-light-color-temp-card-feature": HuiLightColorTempCardFeature;
    }
}
export {};
