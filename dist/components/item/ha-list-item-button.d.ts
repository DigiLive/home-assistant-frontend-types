import type { CSSResultGroup, TemplateResult } from "lit";
import "../ha-ripple";
import { HaListItemBase } from "./ha-list-item-base";
/**
 * @element ha-list-item-button
 * @extends {HaListItemBase}
 *
 * @summary
 * Interactive list row. Renders an inner `<a>` when `href` is set, otherwise
 * a `<button>`. The full row is the hit target. When placed in a list using
 * roving tabindex, the host is the tab stop and the inner element carries
 * `tabindex="-1"`. For a non-interactive row, use `ha-list-item-base`.
 *
 * @csspart ripple - The ripple effect element.
 *
 * @attr {string} href - URL. When set, renders an `<a>` instead of a `<button>`.
 * @attr {string} target - Anchor `target` attribute (requires `href`).
 * @attr {string} rel - Anchor `rel` attribute (requires `href`).
 * @attr {string} download - Anchor `download` attribute (requires `href`).
 */
export declare class HaListItemButton extends HaListItemBase {
    interactive: boolean;
    href?: string;
    target?: string;
    rel?: string;
    download?: string;
    private _item?;
    activate(): void;
    protected _renderBase(inner: TemplateResult): TemplateResult;
    private _renderRipple;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-item-button": HaListItemButton;
    }
}
