import { HaActionBar } from "./ha-action-bar";
import "./ha-button";
import "./ha-svg-icon";
/**
 * @element ha-paste-bar
 *
 * @summary Action bar with a paste button, placed below a scrolling list, e.g.
 * in the add automation element, create card and create badge dialogs.
 * Only render it when there is something on the clipboard.
 *
 * @attr label - Localized label of the paste button, e.g. "Paste action".
 *
 * @cssprop --ha-action-bar-border-top - Top border of the bar. Defaults to `var(--ha-border-width-sm) solid var(--divider-color)`.
 *
 * @fires paste-element - Fired when the paste button is clicked.
 */
export declare class HaPasteBar extends HaActionBar {
    label: string;
    protected render(): import("lit-html").TemplateResult<1>;
    private _paste;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-paste-bar": HaPasteBar;
    }
    interface HASSDomEvents {
        "paste-element": undefined;
    }
}
