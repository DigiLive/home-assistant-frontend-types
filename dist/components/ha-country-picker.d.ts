import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
import "./ha-generic-picker";
import type { PickerComboBoxItem } from "./ha-picker-combo-box";
export declare const COUNTRIES: string[];
export declare const getCountryOptions: (countries: string[], noSort: boolean, locale?: FrontendLocaleData) => PickerComboBoxItem[];
export declare class HaCountryPicker extends LitElement {
    private _i18n?;
    value?: string;
    label?: string;
    countries?: string[];
    helper?: string;
    required: boolean;
    disabled: boolean;
    noSort: boolean;
    private _getCountryOptions;
    private _getItems;
    private _getCountryName;
    private _valueRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _changed;
    private _notFoundLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-country-picker": HaCountryPicker;
    }
}
