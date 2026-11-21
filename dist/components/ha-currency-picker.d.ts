import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
import "./ha-generic-picker";
import type { PickerComboBoxItem } from "./ha-picker-combo-box";
export declare const getCurrencyOptions: (locale?: FrontendLocaleData) => PickerComboBoxItem[];
export declare class HaCurrencyPicker extends LitElement {
    private _i18n?;
    value?: string;
    label?: string;
    required: boolean;
    disabled: boolean;
    private _getCurrencyOptions;
    private _getItems;
    private _getCurrencyName;
    private _valueRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _changed;
    private _notFoundLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-currency-picker": HaCurrencyPicker;
    }
}
