import { LitElement } from "lit";
/**
 * @element ha-action-bar
 *
 * @summary Bar with actions, placed below a scrolling list or content area.
 *
 * @slot - Actions of the bar, e.g. `ha-button` elements.
 *
 * @cssprop --ha-action-bar-border-top - Top border of the bar, set it to match the border of the parent. Defaults to `var(--ha-border-width-sm) solid var(--divider-color)`.
 */
export declare class HaActionBar extends LitElement {
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-action-bar": HaActionBar;
    }
}
