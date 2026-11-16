import { LitElement } from "lit";
import type { TimeSelector } from "../../data/selector";
import "../ha-time-input";
export declare class HaTimeSelector extends LitElement {
    private _locale;
    selector: TimeSelector;
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
        "ha-selector-time": HaTimeSelector;
    }
}
