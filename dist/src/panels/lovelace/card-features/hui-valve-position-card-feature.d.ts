import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LovelaceCardFeatureContext, ValvePositionCardFeatureConfig } from "./types";
export declare const supportsValvePositionCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiValvePositionCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    color?: string;
    private _stateObj?;
    private _localize;
    private _api;
    private _entities;
    private _locale?;
    private _config?;
    static getStubConfig(): ValvePositionCardFeatureConfig;
    setConfig(config: ValvePositionCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-valve-position-card-feature": HuiValvePositionCardFeature;
    }
}
export {};
