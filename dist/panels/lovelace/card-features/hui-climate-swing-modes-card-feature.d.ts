import type { ClimateEntity } from "../../../data/climate";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { ClimateSwingModesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsClimateSwingModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiClimateSwingModesCardFeature extends HuiModeSelectCardFeatureBase<ClimateEntity, ClimateSwingModesCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "swing_mode";
    protected readonly _modesAttribute = "swing_modes";
    protected get _configuredModes(): string[];
    protected readonly _dropdownIconPath: string;
    protected readonly _serviceDomain = "climate";
    protected readonly _serviceAction = "set_swing_mode";
    static getStubConfig(): ClimateSwingModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-swing-modes-card-feature": HuiClimateSwingModesCardFeature;
    }
}
export {};
