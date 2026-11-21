import { LitElement } from "lit";
import "../ha-time-format-picker";
export declare class HaSelectorUiTimeFormat extends LitElement {
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-ui_time_format": HaSelectorUiTimeFormat;
    }
}
