import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { CoverPositionCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsCoverPositionCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiCoverPositionCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    color?: string;
    private _stateObj?;
    private _localize;
    private _api;
    private _entities;
    private _locale?;
    private _config?;
    static getStubConfig(): CoverPositionCardFeatureConfig;
    setConfig(config: CoverPositionCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-position-card-feature": HuiCoverPositionCardFeature;
    }
}
export {};
