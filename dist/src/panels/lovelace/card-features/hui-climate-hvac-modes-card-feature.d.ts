import type { TemplateResult } from "lit";
import type { ClimateEntity } from "../../../data/climate";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase, type HuiModeSelectOption } from "./hui-mode-select-card-feature-base";
import type { ClimateHvacModesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
interface HvacModeOption extends HuiModeSelectOption {
    iconPath: string;
}
export declare const supportsClimateHvacModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiClimateHvacModesCardFeature extends HuiModeSelectCardFeatureBase<ClimateEntity, ClimateHvacModesCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "hvac_mode";
    protected readonly _modesAttribute = "hvac_modes";
    protected get _configuredModes(): ("auto" | "cool" | "dry" | "fan_only" | "heat" | "heat_cool" | "off")[];
    protected readonly _dropdownIconPath: string;
    protected readonly _serviceDomain = "climate";
    protected readonly _serviceAction = "set_hvac_mode";
    protected get _label(): string;
    protected readonly _showDropdownOptionIcons = false;
    protected readonly _defaultStyle = "icons";
    protected get _controlSelectStyle(): Record<string, string | undefined> | undefined;
    static getStubConfig(): ClimateHvacModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected _getValue(stateObj: ClimateEntity): string | undefined;
    protected _getOptions(): HvacModeOption[];
    protected _renderOptionIcon(option: HvacModeOption): TemplateResult<1>;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-hvac-modes-card-feature": HuiClimateHvacModesCardFeature;
    }
}
export {};
