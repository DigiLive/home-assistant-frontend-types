import type { PropertyValues } from "lit";
import { type MediaPlayerEntity } from "../../../data/media-player";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { LovelaceCardFeatureContext, MediaPlayerSoundModeCardFeatureConfig } from "./types";
export declare const supportsMediaPlayerSoundModeCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiMediaPlayerSoundModeCardFeature extends HuiModeSelectCardFeatureBase<MediaPlayerEntity, MediaPlayerSoundModeCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "sound_mode";
    protected readonly _modesAttribute = "sound_mode_list";
    protected readonly _serviceDomain = "media_player";
    protected readonly _serviceAction = "select_sound_mode";
    protected get _label(): string;
    protected readonly _hideLabel = false;
    protected readonly _showDropdownOptionIcons = false;
    protected readonly _allowIconsStyle = false;
    static getStubConfig(): MediaPlayerSoundModeCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected get _configuredModes(): string[];
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-sound-mode-card-feature": HuiMediaPlayerSoundModeCardFeature;
    }
}
export {};
