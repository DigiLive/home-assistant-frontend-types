import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { NumberSelector } from "../../data/selector";
import "../ha-input-helper-text";
import "../ha-slider";
import "../input/ha-input";
export declare class HaNumberSelector extends LitElement {
    selector: NumberSelector;
    value?: number;
    placeholder?: number;
    label?: string;
    helper?: string;
    localizeValue?: (key: string) => string;
    required: boolean;
    disabled: boolean;
    private _input?;
    private _valueStr;
    reportValidity(): boolean;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleInputChange;
    private _handleSliderChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-number": HaNumberSelector;
    }
}
