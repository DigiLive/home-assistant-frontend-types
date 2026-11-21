import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, MediaPlayerVolumeSliderCardFeatureConfig } from "./types";
export declare const supportsMediaPlayerVolumeSliderCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiMediaPlayerVolumeSliderCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _formatters;
    private _locale?;
    private _config?;
    static getStubConfig(): MediaPlayerVolumeSliderCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: MediaPlayerVolumeSliderCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _toggleMute;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-volume-slider-card-feature": HuiMediaPlayerVolumeSliderCardFeature;
    }
}
export {};
