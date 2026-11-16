import { LitElement } from "lit";
import "./ha-dropdown";
import "./ha-dropdown-item";
import "./ha-input-helper-text";
import "./ha-picker-field";
import "./ha-svg-icon";
export interface HaSelectOption {
    value: string | number;
    label?: string;
    secondary?: string;
    iconPath?: string;
    disabled?: boolean;
}
/**
 * Event type for the ha-select component when an item is selected.
 * @param T - The type of the value of the selected item.
 * @param Clearable - Whether the select is clearable (allows undefined values).
 */
export type HaSelectSelectEvent<T = string, Clearable extends boolean = false> = CustomEvent<{
    value: Clearable extends true ? T | undefined : T;
}>;
export declare class HaSelect extends LitElement {
    clearable: boolean;
    options?: HaSelectOption[] | string[] | number[];
    label?: string;
    helper?: string;
    value?: string | number;
    required: boolean;
    disabled: boolean;
    private _opened;
    private _triggerField;
    private _getValueLabel;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderField;
    private _renderHelper;
    private _handleSelect;
    private _clearValue;
    private _handleShow;
    private _handleHide;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-select": HaSelect;
    }
    interface HASSDomEvents {
        selected: {
            value: string | number | undefined;
        };
    }
}
