import type { ClimateEntity } from "../../../data/climate";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { ClimateSwingHorizontalModesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsClimateSwingHorizontalModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiClimateSwingHorizontalModesCardFeature extends HuiModeSelectCardFeatureBase<ClimateEntity, ClimateSwingHorizontalModesCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "swing_horizontal_mode";
    protected readonly _modesAttribute = "swing_horizontal_modes";
    protected get _configuredModes(): string[];
    protected readonly _dropdownIconPath: string;
    protected readonly _serviceDomain = "climate";
    protected readonly _serviceAction = "set_swing_horizontal_mode";
    static getStubConfig(): ClimateSwingHorizontalModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-swing-horizontal-modes-card-feature": HuiClimateSwingHorizontalModesCardFeature;
    }
}
export {};
