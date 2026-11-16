import { LitElement, nothing } from "lit";
import "../../../components/ha-action-result";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { ButtonCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsButtonCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiButtonCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _services;
    private _config?;
    private _result;
    private _pressButton;
    static getStubConfig(): ButtonCardFeatureConfig;
    setConfig(config: ButtonCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-card-feature": HuiButtonCardFeature;
    }
}
export {};
