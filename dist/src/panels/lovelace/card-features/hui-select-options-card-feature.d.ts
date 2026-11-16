import type { InputSelectEntity } from "../../../data/input_select";
import type { SelectEntity } from "../../../data/select";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase, type HuiModeSelectOption } from "./hui-mode-select-card-feature-base";
import type { LovelaceCardFeatureContext, SelectOptionsCardFeatureConfig } from "./types";
type SelectOptionEntity = SelectEntity | InputSelectEntity;
export declare const supportsSelectOptionsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiSelectOptionsCardFeature extends HuiModeSelectCardFeatureBase<SelectOptionEntity, SelectOptionsCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "option";
    protected readonly _modesAttribute = "options";
    protected get _configuredModes(): string[];
    protected readonly _serviceDomain = "select";
    protected readonly _serviceAction = "select_option";
    protected get _label(): string;
    protected readonly _allowIconsStyle = false;
    protected readonly _allowButtonsStyle = true;
    protected readonly _showDropdownOptionIcons = false;
    static getStubConfig(): SelectOptionsCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected _getValue(stateObj: SelectOptionEntity): string | undefined;
    protected _getOptions(): HuiModeSelectOption[];
    protected _getServiceDomain(stateObj: SelectOptionEntity): string;
    protected _isValueValid(value: string, stateObj: SelectOptionEntity): boolean;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-select-options-card-feature": HuiSelectOptionsCardFeature;
    }
}
export {};
