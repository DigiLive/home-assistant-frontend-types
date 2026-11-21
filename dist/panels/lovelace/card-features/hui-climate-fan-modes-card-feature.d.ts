import type { ClimateEntity } from "../../../data/climate";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { ClimateFanModesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsClimateFanModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiClimateFanModesCardFeature extends HuiModeSelectCardFeatureBase<ClimateEntity, ClimateFanModesCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "fan_mode";
    protected readonly _modesAttribute = "fan_modes";
    protected get _configuredModes(): string[];
    protected readonly _dropdownIconPath: string;
    protected readonly _serviceDomain = "climate";
    protected readonly _serviceAction = "set_fan_mode";
    static getStubConfig(): ClimateFanModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-fan-modes-card-feature": HuiClimateFanModesCardFeature;
    }
}
export {};
