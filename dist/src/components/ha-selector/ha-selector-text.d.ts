import { LitElement } from "lit";
import type { StringSelector } from "../../data/selector";
import "../ha-textarea";
import "../input/ha-input";
import "../input/ha-input-multi";
export declare class HaTextSelector extends LitElement {
    value?: any;
    name?: string;
    label?: string;
    placeholder?: string;
    helper?: string;
    selector: StringSelector;
    disabled: boolean;
    required: boolean;
    private _input?;
    private _inputMulti?;
    focus(): Promise<void>;
    reportValidity(): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-text": HaTextSelector;
    }
}
