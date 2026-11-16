import { LitElement } from "lit";
import type { UiClockDateFormatSelector } from "../../data/selector";
import "../ha-clock-date-format-picker";
export declare class HaSelectorUiClockDateFormat extends LitElement {
    selector: UiClockDateFormatSelector;
    value?: string | string[];
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-ui_clock_date_format": HaSelectorUiClockDateFormat;
    }
}
