import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, MediaPlayerPlaybackCardFeatureConfig } from "./types";
export declare const supportsMediaPlayerPlaybackCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiMediaPlayerPlaybackCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    color?: string;
    private _stateObj?;
    private _localize;
    private _api;
    private _config?;
    private _narrow?;
    static getStubConfig(): MediaPlayerPlaybackCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: MediaPlayerPlaybackCardFeatureConfig): void;
    willUpdate(): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _measureCard;
    private _computeButtons;
    private _filterNarrow;
    private _action;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-playback-card-feature": HuiMediaPlayerPlaybackCardFeature;
    }
}
export {};
