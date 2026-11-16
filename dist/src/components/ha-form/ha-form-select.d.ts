import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-selector/ha-selector-select";
import type { HaFormElement, HaFormSelectData, HaFormSelectSchema } from "./types";
/**
 * The underlying select returns option values as strings. Map a selected value
 * back to its original option value so the source type is retained (for example
 * a number coming from a backend `vol.In` schema), falling back to the value
 * itself when no option matches.
 */
export declare const matchSelectOptionValue: (options: HaFormSelectSchema["options"], value: string) => HaFormSelectData;
export declare class HaFormSelect extends LitElement implements HaFormElement {
    schema: HaFormSelectSchema;
    data: HaFormSelectData;
    label?: string;
    helper?: string;
    localizeValue?: (key: string) => string;
    disabled: boolean;
    private _selectSchema;
    reportValidity(): boolean;
    protected render(): TemplateResult;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-select": HaFormSelect;
    }
}
