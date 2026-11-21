import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LightBrightnessCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsLightBrightnessCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiLightBrightnessCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _locale?;
    private _config?;
    static getStubConfig(): LightBrightnessCardFeatureConfig;
    setConfig(config: LightBrightnessCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-light-brightness-card-feature": HuiLightBrightnessCardFeature;
    }
}
export {};
