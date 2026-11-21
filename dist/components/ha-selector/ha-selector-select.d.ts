import { LitElement } from "lit";
import type { SelectSelector } from "../../data/selector";
import "../chips/ha-chip-set";
import "../chips/ha-input-chip";
import "../ha-checkbox";
import "../ha-dropdown-item";
import "../ha-generic-picker";
import "../ha-button";
import "../ha-input-helper-text";
import "../ha-select";
import "../ha-select-box";
import "../ha-sortable";
import "../ha-svg-icon";
import "../radio/ha-radio-group";
import "../radio/ha-radio-option";
export declare class HaSelectSelector extends LitElement {
    private _i18n;
    selector: SelectSelector;
    value?: string | string[];
    label?: string;
    helper?: string;
    localizeValue?: (key: string) => string;
    disabled: boolean;
    required: boolean;
    private _picker?;
    private _itemMoved;
    private _move;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderHelper;
    private _openPicker;
    private _getOptions;
    private _getItems;
    private get _mode();
    private _radioChanged;
    private _selectChanged;
    private _valueChanged;
    private _checkboxChanged;
    private _removeItem;
    private _comboBoxValueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-select": HaSelectSelector;
    }
}
