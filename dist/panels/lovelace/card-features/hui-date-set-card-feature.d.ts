import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { DateSetCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsDateSetCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => any;
declare class HuiDateSetCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    color?: string;
    private _stateObj?;
    private _localize;
    private _locale?;
    private _api;
    private _config?;
    private _pressButton;
    private _dateChanged;
    static getStubConfig(): DateSetCardFeatureConfig;
    setConfig(config: DateSetCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-date-set-card-feature": HuiDateSetCardFeature;
    }
}
export {};
