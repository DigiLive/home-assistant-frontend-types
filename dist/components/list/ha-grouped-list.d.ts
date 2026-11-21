import type { TemplateResult } from "lit";
import { HaListBase } from "./ha-list-base";
/**
 * @element ha-grouped-list
 * @extends {HaListBase}
 *
 * @summary
 * Grouped list: an optional header above a framed box of rows separated by
 * hairlines — the "grouped list" idiom of settings and detail views. Items
 * are `<ha-list-item-*>` rows; use `ha-list-item-value` for label/value
 * facts and `ha-list-item-button` for navigable rows.
 *
 * @slot - List items (`<ha-list-item-*>`).
 *
 * @csspart header - The header above the frame.
 * @csspart base - The framed `<div role="list">`.
 *
 * @cssprop --ha-row-item-padding-inline - Horizontal padding of the rows, which the header aligns to. Defaults to `--ha-space-3`.
 *
 * @attr {string} header - Header text rendered above the frame.
 */
export declare class HaGroupedList extends HaListBase {
    protected readonly hostRole = "";
    header?: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-grouped-list": HaGroupedList;
    }
}
