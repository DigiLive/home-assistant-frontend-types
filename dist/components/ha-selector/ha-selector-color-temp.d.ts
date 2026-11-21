import { LitElement } from "lit";
import type { ColorTempSelector } from "../../data/selector";
import "../ha-labeled-slider";
export declare class HaColorTempSelector extends LitElement {
    selector: ColorTempSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _generateTemperatureGradient;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-color_temp": HaColorTempSelector;
    }
}
