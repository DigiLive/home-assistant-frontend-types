import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "./ha-adaptive-dialog";
import "./ha-button";
import "./ha-dialog-footer";
import "./ha-filter-pane-chip";
import "./ha-icon-button";
/**
 * Filter pane for a filtered page: a column next to the content on wide
 * screens, a bottom sheet on narrow ones. Mirrors the filter pane of
 * `hass-tabs-subpage-data-table` for pages that are not a data table.
 *
 * The page keeps ownership of whether the pane is shown, so that it can also
 * open it from elsewhere (e.g. an empty state) and hide its own toolbar chip
 * while it is open.
 *
 * @slot - Filter panels, e.g. `ha-filter-domains`.
 */
export declare class HaFilterPane extends LitElement {
    narrow: boolean;
    /** Header label, defaults to "Filters". */
    label?: string;
    /** SVG path of the header chip icon. */
    path: string;
    /** Number of active filters, shows the clear button when above zero. */
    count: number;
    /**
     * Number of results the current filters resolve to, shown on the narrow
     * confirm button. Leave undefined when the page shows everything.
     */
    resultCount?: number;
    disabled: boolean;
    private _localize;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderClearButton;
    highlight(): void;
    private _close;
    private _clear;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-pane": HaFilterPane;
    }
    interface HASSDomEvents {
        "close-filter-pane": undefined;
    }
}
