import { LitElement } from "lit";
import type { TimezoneSelector } from "../../data/selector";
import "../ha-timezone-picker";
export declare class HaTimezoneSelector extends LitElement {
    selector: TimezoneSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-timezone": HaTimezoneSelector;
    }
}
