import { LitElement } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import "./chips/ha-chip-set";
import "./chips/ha-input-chip";
import "./ha-generic-picker";
import type { PickerComboBoxItem } from "./ha-picker-combo-box";
export declare const getStateClassOptions: (localize: LocalizeFunc, stateClasses: string[]) => PickerComboBoxItem[];
export declare class HaStateClassPicker extends LitElement {
    value?: string | string[];
    multiple: boolean;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    stateClasses?: string[];
    private _i18n?;
    private _translationsLoaded;
    protected willUpdate(): void;
    private get _value();
    private _stateClassName;
    private _options;
    private _availableOptions;
    private _getItems;
    private _valueRenderer;
    private _notFoundLabel;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _itemAdded;
    private _removeItem;
    private _setValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-class-picker": HaStateClassPicker;
    }
}
