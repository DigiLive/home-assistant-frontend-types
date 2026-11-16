import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-checkbox";
import "../ha-dropdown";
import "../ha-dropdown-item";
import "../ha-icon-button";
import "../ha-picker-field";
import type { HaDropdownSelectEvent } from "../ha-dropdown";
import type { HaFormElement, HaFormMultiSelectData, HaFormMultiSelectSchema } from "./types";
export declare class HaFormMultiSelect extends LitElement implements HaFormElement {
    schema: HaFormMultiSelectSchema;
    data: HaFormMultiSelectData;
    label: string;
    disabled: boolean;
    private _dropdown;
    focus(): void;
    reportValidity(): boolean;
    protected render(): TemplateResult;
    protected _toggleItem(ev: HaDropdownSelectEvent): void;
    protected updated(changedProps: PropertyValues<this>): void;
    private _valueChanged;
    private _handleValueChanged;
    private _showDropdown;
    private _handleKeydown;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-multi_select": HaFormMultiSelect;
    }
}
