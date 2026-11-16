import { LitElement } from "lit";
import "./ha-generic-picker";
import type { PickerComboBoxItem } from "./ha-picker-combo-box";
export declare const getTimezoneOptions: () => PickerComboBoxItem[];
export declare class HaTimeZonePicker extends LitElement {
    private _localize;
    value?: string;
    label?: string;
    helper?: string;
    placeholder?: string;
    required: boolean;
    disabled: boolean;
    hideClearIcon: boolean;
    private _getTimezoneOptions;
    private _getItems;
    private _getTimezoneName;
    private _valueRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _changed;
    private _notFoundLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-timezone-picker": HaTimeZonePicker;
    }
}
