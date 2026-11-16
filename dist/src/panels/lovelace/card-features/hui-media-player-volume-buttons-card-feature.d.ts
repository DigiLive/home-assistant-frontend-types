import { LitElement, nothing } from "lit";
import "../../../components/ha-control-number-buttons";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, MediaPlayerVolumeButtonsCardFeatureConfig } from "./types";
export declare const supportsMediaPlayerVolumeButtonsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiMediaPlayerVolumeButtonsCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _formatters;
    private _locale?;
    private _config?;
    static getStubConfig(): MediaPlayerVolumeButtonsCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: MediaPlayerVolumeButtonsCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _toggleMute;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-volume-buttons-card-feature": HuiMediaPlayerVolumeButtonsCardFeature;
    }
}
export {};
