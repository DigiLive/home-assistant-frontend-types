import type { ClimateEntity } from "../../../data/climate";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { ClimatePresetModesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsClimatePresetModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiClimatePresetModesCardFeature extends HuiModeSelectCardFeatureBase<ClimateEntity, ClimatePresetModesCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "preset_mode";
    protected readonly _modesAttribute = "preset_modes";
    protected get _configuredModes(): string[];
    protected readonly _dropdownIconPath: string;
    protected readonly _serviceDomain = "climate";
    protected readonly _serviceAction = "set_preset_mode";
    static getStubConfig(): ClimatePresetModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-preset-modes-card-feature": HuiClimatePresetModesCardFeature;
    }
}
export {};
