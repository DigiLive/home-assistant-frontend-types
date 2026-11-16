import type { HumidifierEntity } from "../../../data/humidifier";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { HumidifierModesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsHumidifierModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiHumidifierModesCardFeature extends HuiModeSelectCardFeatureBase<HumidifierEntity, HumidifierModesCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "mode";
    protected readonly _modesAttribute = "available_modes";
    protected get _configuredModes(): string[];
    protected readonly _dropdownIconPath: string;
    protected readonly _serviceDomain = "humidifier";
    protected readonly _serviceAction = "set_mode";
    static getStubConfig(): HumidifierModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-modes-card-feature": HuiHumidifierModesCardFeature;
    }
}
export {};
