import { LitElement } from "lit";
import type { ColorRGBSelector } from "../../data/selector";
import "../input/ha-input";
export declare class HaColorRGBSelector extends LitElement {
    selector: ColorRGBSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-color_rgb": HaColorRGBSelector;
    }
}
