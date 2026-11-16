import { LitElement } from "lit";
import "./ha-svg-icon";
/**
 * Centered placeholder for a surface that has nothing to show, with an icon, a
 * heading, an optional description and optional actions.
 *
 * @slot - Actions that help the user fill the surface, e.g. a button.
 */
export declare class HaEmptyState extends LitElement {
    /** SVG path of the icon shown above the heading. */
    icon?: string;
    heading?: string;
    description?: string;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-empty-state": HaEmptyState;
    }
}
