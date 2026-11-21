import { LitElement } from "lit";
/**
 * @element ha-section-title
 * @summary Bold, tinted heading that labels a group of items in a list.
 * @slot - The title text.
 * @cssprop --ha-section-title-padding - Padding around the title. Defaults to `var(--ha-space-2) var(--ha-space-3)`.
 */
declare class HaSectionTitle extends LitElement {
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-section-title": HaSectionTitle;
    }
}
export {};
