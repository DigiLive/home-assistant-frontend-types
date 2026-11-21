import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-switch";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LovelaceCardFeatureContext, ToggleCardFeatureConfig } from "./types";
export declare const supportsToggleCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiToggleCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _config?;
    static getStubConfig(): ToggleCardFeatureConfig;
    setConfig(config: ToggleCardFeatureConfig): void;
    private _valueChanged;
    private _turnOn;
    private _turnOff;
    private _callService;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-toggle-card-feature": HuiToggleCardFeature;
    }
}
export {};
