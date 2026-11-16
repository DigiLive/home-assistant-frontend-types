import { LitElement } from "lit";
import "./ha-generic-picker";
export declare class HaUnitOfMeasurementPicker extends LitElement {
    value?: string;
    /** Allowed units, `null` means "no unit" is allowed. `undefined` allows any unit. */
    units?: (string | null)[];
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _i18n?;
    private _items;
    private _getItems;
    private _notFoundLabel;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-unit-of-measurement-picker": HaUnitOfMeasurementPicker;
    }
}
