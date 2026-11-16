import type { PropertyValues } from "lit";
import { type MediaPlayerEntity } from "../../../data/media-player";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { LovelaceCardFeatureContext, MediaPlayerSourceCardFeatureConfig } from "./types";
export declare const supportsMediaPlayerSourceCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiMediaPlayerSourceCardFeature extends HuiModeSelectCardFeatureBase<MediaPlayerEntity, MediaPlayerSourceCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "source";
    protected readonly _modesAttribute = "source_list";
    protected get _configuredModes(): string[];
    protected readonly _serviceDomain = "media_player";
    protected readonly _serviceAction = "select_source";
    protected get _label(): string;
    protected readonly _hideLabel = false;
    protected readonly _showDropdownOptionIcons = false;
    protected readonly _allowIconsStyle = false;
    static getStubConfig(): MediaPlayerSourceCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-source-card-feature": HuiMediaPlayerSourceCardFeature;
    }
}
export {};
