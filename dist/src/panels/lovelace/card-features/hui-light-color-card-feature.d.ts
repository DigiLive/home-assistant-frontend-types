import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-scrubber";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { type LightColorCardFeatureConfig, type LovelaceCardFeatureContext } from "./types";
export declare const supportsLightColorCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiLightColorCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _locale?;
    private _config?;
    private _expanded;
    private _liveHue?;
    private _expandedControl?;
    private _focusExpanded;
    static getStubConfig(): LightColorCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: LightColorCardFeatureConfig): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderAxis;
    protected updated(changedProps: PropertyValues): void;
    private _expand;
    private _hueMoved;
    private _hueChanged;
    private _saturationChanged;
    private _setColor;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-light-color-card-feature": HuiLightColorCardFeature;
    }
}
export {};
