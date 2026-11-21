import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-switch";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LovelaceCardFeatureContext, ValveOpenCloseCardFeatureConfig } from "./types";
export declare const supportsValveOpenCloseCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiValveOpenCloseCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _config?;
    static getStubConfig(): ValveOpenCloseCardFeatureConfig;
    setConfig(config: ValveOpenCloseCardFeatureConfig): void;
    private _onOpenValve;
    private _onCloseValve;
    private _onOpenTap;
    private _onCloseTap;
    private _onStopTap;
    private _valueChanged;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-valve-open-close-card-feature": HuiValveOpenCloseCardFeature;
    }
}
export {};
