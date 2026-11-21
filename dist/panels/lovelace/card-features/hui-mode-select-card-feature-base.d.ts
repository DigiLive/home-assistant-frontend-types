import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../../../common/translations/localize";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-svg-icon";
import type { HomeAssistantApi, HomeAssistantFormatters } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LovelaceCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
type AttributeModeCardFeatureConfig = LovelaceCardFeatureConfig & {
    style?: "dropdown" | "icons" | "buttons";
};
export interface HuiModeSelectOption {
    value: string;
    label: string;
}
export declare abstract class HuiModeSelectCardFeatureBase<TEntity extends HassEntity, TConfig extends AttributeModeCardFeatureConfig> extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    protected _stateObj?: TEntity;
    protected _localize: LocalizeFunc;
    protected _api: HomeAssistantApi;
    protected _formatters: HomeAssistantFormatters;
    protected _config?: TConfig;
    protected _currentValue?: string;
    protected abstract readonly _attribute: string;
    protected abstract readonly _modesAttribute: string;
    protected get _configuredModes(): string[] | undefined;
    protected readonly _dropdownIconPath?: string;
    protected abstract readonly _serviceDomain: string;
    protected abstract readonly _serviceAction: string;
    protected abstract _isSupported(): boolean;
    protected get _label(): string;
    protected readonly _hideLabel: boolean;
    protected readonly _showDropdownOptionIcons: boolean;
    protected readonly _allowIconsStyle: boolean;
    protected readonly _allowButtonsStyle: boolean;
    protected readonly _defaultStyle: "dropdown" | "icons" | "buttons";
    protected get _controlSelectStyle(): Record<string, string | undefined> | undefined;
    protected _getServiceDomain(_stateObj: TEntity): string;
    protected _isValueValid(_value: string, _stateObj: TEntity): boolean;
    setConfig(config: TConfig): void;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult | null;
    protected _getValue(stateObj: TEntity): string | undefined;
    protected _getOptions(): HuiModeSelectOption[];
    protected _renderOptionIcon(option: HuiModeSelectOption): TemplateResult<1>;
    private _renderMenuIcon;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
export {};
