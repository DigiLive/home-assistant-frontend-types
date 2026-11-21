import { LitElement } from "lit";
import "../ha-generic-picker";
import type { PickerComboBoxItem } from "../ha-picker-combo-box";
export declare class HaEntityStatePicker extends LitElement {
    entityId?: string | string[];
    attribute?: string;
    extraOptions?: PickerComboBoxItem[];
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomValue: any;
    hideStates?: string[];
    label?: string;
    value?: string;
    helper?: string;
    private _stateObjs?;
    private _states?;
    private _formatters;
    private _i18n;
    private _getItems;
    private _getFilteredItems;
    private _valueRenderer;
    private _computeDefaultLabel;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-state-picker": HaEntityStatePicker;
    }
}
