import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-combo-box-item";
import "./ha-generic-picker";
import "./ha-icon";
export declare class HaIconPicker extends LitElement {
    value?: string;
    label?: string;
    helper?: string;
    placeholder?: string;
    errorMessage?: string;
    disabled: boolean;
    required: boolean;
    invalid: boolean;
    private _getIconPickerItems;
    protected render(): TemplateResult;
    private _filterIcons;
    protected firstUpdated(): void;
    private _valueChanged;
    private _setValue;
    private get _icon();
    private get _value();
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-picker": HaIconPicker;
    }
}
