import "../chips/ha-assist-chip";
import "../ha-icon-button-next";
import "../ha-icon-button-prev";
import "../ha-svg-icon";
import { HaDateRangePicker } from "./ha-date-range-picker";
/**
 * Date range picker as a single pill that also steps through ranges: a
 * previous button, the selected range and a next button. Meant for a toolbar,
 * next to other chips.
 */
export declare class HaDateRangeNav extends HaDateRangePicker {
    protected _renderField(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-date-range-nav": HaDateRangeNav;
    }
}
