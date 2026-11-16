import { LitElement, nothing } from "lit";
import "../../../components/ha-control-select";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { FanSpeedCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsFanSpeedCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiFanSpeedCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _formatters;
    private _entities;
    private _locale?;
    private _config?;
    static getStubConfig(): FanSpeedCardFeatureConfig;
    setConfig(config: FanSpeedCardFeatureConfig): void;
    private _localizeSpeed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _speedValueChanged;
    private _valueChanged;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-fan-speed-card-feature": HuiFanSpeedCardFeature;
    }
}
export {};
