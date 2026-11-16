import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
import "./ha-button";
import "./ha-generic-picker";
import type { HaGenericPicker } from "./ha-generic-picker";
import type { PickerComboBoxItem } from "./ha-picker-combo-box";
export declare const getLanguageOptions: (languages: string[], nativeName: boolean, noSort: boolean, locale?: FrontendLocaleData) => PickerComboBoxItem[];
export declare class HaLanguagePicker extends LitElement {
    value?: string;
    label?: string;
    languages?: string[];
    disabled: boolean;
    required: boolean;
    helper?: string;
    nativeName: boolean;
    buttonStyle: boolean;
    noSort: boolean;
    private _i18n?;
    _defaultLanguages: string[];
    genericPicker: HaGenericPicker;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _getLanguagesOptions;
    private _computeDefaultLanguageOptions;
    private _getItems;
    private _getLanguageName;
    private _valueRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    private _openPicker;
    static styles: import("lit").CSSResult;
    private _changed;
    private _notFoundLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-language-picker": HaLanguagePicker;
    }
}
