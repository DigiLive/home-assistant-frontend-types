import type { FanEntity } from "../../../data/fan";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { FanPresetModesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsFanPresetModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiFanPresetModesCardFeature extends HuiModeSelectCardFeatureBase<FanEntity, FanPresetModesCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "preset_mode";
    protected readonly _modesAttribute = "preset_modes";
    protected get _configuredModes(): string[];
    protected readonly _dropdownIconPath: string;
    protected readonly _serviceDomain = "fan";
    protected readonly _serviceAction = "set_preset_mode";
    static getStubConfig(): FanPresetModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-fan-preset-modes-card-feature": HuiFanPresetModesCardFeature;
    }
}
export {};
