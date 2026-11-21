import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
import "./ha-base-time-input";
export declare class HaTimeInput extends LitElement {
    locale: FrontendLocaleData;
    value?: string;
    label?: string;
    /** Accessible name for the input when it has no visible label. */
    accessibleLabel?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    autoValidate: boolean;
    enableSecond: boolean;
    clearable?: boolean;
    placeholderLabels: boolean;
    private _input?;
    reportValidity(): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _timeChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-time-input": HaTimeInput;
    }
}
