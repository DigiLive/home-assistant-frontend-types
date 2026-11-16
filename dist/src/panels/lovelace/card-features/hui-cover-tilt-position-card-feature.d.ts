import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { CoverTiltPositionCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsCoverTiltPositionCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiCoverTiltPositionCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    color?: string;
    private _stateObj?;
    private _localize;
    private _api;
    private _entities;
    private _locale?;
    private _config?;
    static getStubConfig(): CoverTiltPositionCardFeatureConfig;
    setConfig(config: CoverTiltPositionCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-tilt-position-card-feature": HuiCoverTiltPositionCardFeature;
    }
}
export {};
