import type { WaterHeaterEntity } from "../../../data/water_heater";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { LovelaceCardFeatureContext, WaterHeaterOperationModesCardFeatureConfig } from "./types";
export declare const supportsWaterHeaterOperationModesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiWaterHeaterOperationModeCardFeature extends HuiModeSelectCardFeatureBase<WaterHeaterEntity, WaterHeaterOperationModesCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "operation_mode";
    protected readonly _modesAttribute = "operation_list";
    protected get _configuredModes(): ("eco" | "electric" | "gas" | "heat_pump" | "high_demand" | "off" | "performance")[];
    protected readonly _dropdownIconPath: string;
    protected readonly _serviceDomain = "water_heater";
    protected readonly _serviceAction = "set_operation_mode";
    protected get _label(): string;
    protected readonly _defaultStyle = "icons";
    protected get _controlSelectStyle(): Record<string, string | undefined> | undefined;
    static getStubConfig(): WaterHeaterOperationModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected _getValue(stateObj: WaterHeaterEntity): string | undefined;
    protected _getOptions(): {
        value: "eco" | "electric" | "gas" | "heat_pump" | "high_demand" | "off" | "performance";
        label: string;
    }[];
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-water-heater-operation-modes-card-feature": HuiWaterHeaterOperationModeCardFeature;
    }
}
export {};
