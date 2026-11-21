import { LitElement } from "lit";
/**
 * @element ha-dialog-header
 * @extends {LitElement}
 *
 * @summary
 * Dialog header bar with a navigation icon, title, subtitle, and action items.
 *
 * @slot navigationIcon - Leading action, such as a close or back button.
 * @slot title - Title text.
 * @slot subtitle - Subtitle text.
 * @slot actionItems - Trailing actions, such as buttons or menus.
 * @slot - Content below the header bar.
 *
 * @cssprop --ha-dialog-header-white-space - White space of the title and subtitle, set to `normal` to let them wrap. Defaults to `nowrap`.
 * @cssprop --ha-dialog-header-title-height - Height of the title, set to `auto` when it wraps.
 * @cssprop --ha-dialog-header-title-color - Color of the title.
 * @cssprop --ha-dialog-header-subtitle-color - Color of the subtitle.
 *
 * @attr {("above"|"below")} subtitle-position - Position of the subtitle relative to the title. Defaults to "below".
 * @attr {boolean} show-border - Shows a border below the header.
 */
export declare class HaDialogHeader extends LitElement {
    subtitlePosition: "above" | "below";
    showBorder: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-header": HaDialogHeader;
    }
}
