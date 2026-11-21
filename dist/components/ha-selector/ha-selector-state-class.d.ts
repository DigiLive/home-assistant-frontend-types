import { LitElement } from "lit";
import type { StateClassSelector } from "../../data/selector";
import "../ha-state-class-picker";
export declare class HaStateClassSelector extends LitElement {
    selector: StateClassSelector;
    value?: string | string[];
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-state_class": HaStateClassSelector;
    }
}
