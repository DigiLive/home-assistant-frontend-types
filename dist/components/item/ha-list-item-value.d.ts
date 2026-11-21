import type { CSSResultGroup, TemplateResult } from "lit";
import { HaListItemBase } from "./ha-list-item-base";
/**
 * @element ha-list-item-value
 * @extends {HaListItemBase}
 *
 * @summary
 * Non-interactive label/value row for grouped lists: label on the start
 * side, value content end-aligned. The value is the default slot so callers
 * can render rich content (links, secondary lines).
 *
 * @slot - The value content.
 *
 * @csspart label - The label column.
 * @csspart value - The value column.
 *
 * @cssprop --ha-list-item-value-max-width - Maximum width of the value column. Defaults to 60%.
 *
 * @attr {string} label - The row label.
 */
export declare class HaListItemValue extends HaListItemBase {
    label?: string;
    protected _renderInner(): TemplateResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-item-value": HaListItemValue;
    }
}
