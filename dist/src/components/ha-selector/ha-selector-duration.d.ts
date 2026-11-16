import { LitElement } from "lit";
import type { PropertyValues } from "lit";
import type { DurationSelector } from "../../data/selector";
import "../ha-duration-input";
import type { HaDurationData } from "../ha-duration-input";
import "../ha-input-helper-text";
import "../ha-select";
export declare class HaTimeDuration extends LitElement {
    selector: DurationSelector;
    value?: HaDurationData | string | number;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _localize;
    private _input?;
    private _offsetType;
    reportValidity(): boolean;
    private _data;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _offsetTypeOptions;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderInput;
    private _durationChanged;
    private _offsetTypeChanged;
    private _fireValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-duration": HaTimeDuration;
    }
}
