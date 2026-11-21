import type { VacuumEntity } from "../../../data/vacuum";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { LovelaceCardFeatureContext, VacuumFanSpeedCardFeatureConfig } from "./types";
export declare const supportsVacuumFanSpeedCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiVacuumFanSpeedCardFeature extends HuiModeSelectCardFeatureBase<VacuumEntity, VacuumFanSpeedCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "fan_speed";
    protected readonly _modesAttribute = "fan_speed_list";
    protected get _configuredModes(): string[];
    protected readonly _dropdownIconPath: string;
    protected readonly _allowIconsStyle = false;
    protected readonly _showDropdownOptionIcons = false;
    protected readonly _serviceDomain = "vacuum";
    protected readonly _serviceAction = "set_fan_speed";
    static getStubConfig(): VacuumFanSpeedCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-vacuum-fan-speed-card-feature": HuiVacuumFanSpeedCardFeature;
    }
}
export {};
