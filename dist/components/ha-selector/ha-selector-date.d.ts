import { LitElement } from "lit";
import type { DateSelector } from "../../data/selector";
import "../ha-date-input";
export declare class HaDateSelector extends LitElement {
    private _locale;
    selector: DateSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _input?;
    reportValidity(): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-date": HaDateSelector;
    }
}
