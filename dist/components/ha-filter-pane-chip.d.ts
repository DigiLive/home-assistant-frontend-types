import { LitElement } from "lit";
import "./chips/ha-assist-chip";
import "./ha-svg-icon";
/**
 * Chip that opens a filter pane, with a badge showing how many filters are
 * active.
 */
export declare class HaFilterPaneChip extends LitElement {
    label: string;
    /** SVG path of the leading icon. */
    path?: string;
    /** Number of active filters, shown as a badge when there is at least one. */
    count: number;
    active: boolean;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-pane-chip": HaFilterPaneChip;
    }
}
