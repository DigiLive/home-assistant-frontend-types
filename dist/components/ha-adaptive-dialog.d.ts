import type { ContextType } from "@lit/context";
import { LitElement } from "lit";
import { internationalizationContext } from "../data/context";
import "./ha-bottom-sheet";
import "./ha-dialog-header";
import "./ha-icon-button";
import "./ha-dialog";
import type { DialogWidth } from "./ha-dialog";
type DialogSheetMode = "dialog" | "bottom-sheet";
export declare const ADAPTIVE_DIALOG_MEDIA_QUERY = "(max-width: 870px), (max-height: 500px)";
/**
 * Home Assistant adaptive dialog component
 *
 * @element ha-adaptive-dialog
 * @extends {LitElement}
 *
 * @summary
 * A responsive dialog component that automatically switches between a full dialog (ha-dialog)
 * and a bottom sheet (ha-bottom-sheet) based on screen size. Uses dialog mode on larger screens
 * (>870px width and >500px height) and bottom sheet mode on smaller screens or mobile devices.
 *
 * @slot header - Replace the entire header area.
 * @slot headerNavigationIcon - Leading header action (e.g. close/back button).
 * @slot headerTitle - Custom title content (used when header-title is not set).
 * @slot headerSubtitle - Custom subtitle content (used when header-subtitle is not set).
 * @slot headerActionItems - Trailing header actions (e.g. buttons, menus).
 * @slot - Dialog/sheet content body.
 * @slot footer - Dialog/sheet footer content.
 *
 * @cssprop --ha-dialog-surface-background - Dialog/sheet background color.
 * @cssprop --ha-dialog-surface-backdrop-filter - Dialog/sheet backdrop filter.
 * @cssprop --dialog-box-shadow - Dialog box shadow (dialog mode only).
 * @cssprop --ha-dialog-border-radius - Border radius of the dialog surface (dialog mode only).
 * @cssprop --ha-dialog-show-duration - Show animation duration (dialog mode only).
 * @cssprop --ha-dialog-hide-duration - Hide animation duration (dialog mode only).
 * @cssprop --ha-dialog-scrim-backdrop-filter - Dialog/sheet scrim backdrop filter.
 * @cssprop --dialog-backdrop-filter - Dialog/sheet scrim backdrop filter (legacy).
 * @cssprop --mdc-dialog-scrim-color - Dialog/sheet scrim color (legacy).
 * @cssprop --ha-bottom-sheet-surface-background - Bottom sheet background color (sheet mode only).
 * @cssprop --ha-bottom-sheet-surface-backdrop-filter - Bottom sheet backdrop filter (sheet mode only).
 * @cssprop --ha-bottom-sheet-scrim-backdrop-filter - Bottom sheet scrim backdrop filter (sheet mode only).
 * @cssprop --ha-bottom-sheet-scrim-color - Bottom sheet scrim color (sheet mode only).
 *
 * @attr {boolean} open - Controls the dialog/sheet open state.
 * @attr {("alert"|"standard")} type - Dialog type (dialog mode only). Defaults to "standard".
 * @attr {("small"|"medium"|"large"|"full")} width - Preferred dialog width preset (dialog mode only). Defaults to "medium".
 * @attr {boolean} prevent-scrim-close - Prevents closing by clicking the scrim/overlay.
 * @attr {string} header-title - Header title text. If not set, the headerTitle slot is used.
 * @attr {string} header-subtitle - Header subtitle text. If not set, the headerSubtitle slot is used.
 * @attr {("above"|"below")} header-subtitle-position - Position of the subtitle relative to the title. Defaults to "below".
 * @attr {boolean} flexcontent - Makes the content body a flex container.
 * @attr {boolean} without-header - Hides the default header.
 * @attr {boolean} hide-close-button - Hides the default close button.
 * @attr {boolean} allow-mode-change - When set, the component can switch between dialog and bottom-sheet modes as the viewport changes.
 *
 * @event opened - Fired when the dialog/sheet is shown.
 * @event closed - Fired after the dialog/sheet is hidden.
 * @event after-show - Fired after show animation completes.
 *
 * @remarks
 * **Responsive Behavior:**
 * The component automatically switches between dialog and bottom sheet modes based on viewport size.
 * Dialog mode is used for screens wider than 870px and taller than 500px.
 * Bottom sheet mode is used for mobile devices and smaller screens.
 *
 * By default, the mode is determined once at mount time and is then kept stable to avoid state
 * loss (like form resets) during viewport changes. Set `allow-mode-change` to opt into live
 * mode switching while the dialog is open.
 *
 * **Focus Management:**
 * To automatically focus an element when opened, add the `autofocus` attribute to it.
 * Components with `delegatesFocus: true` (like `ha-form`) will forward focus to their first focusable child.
 * Example: `<ha-form autofocus .schema=${schema}></ha-form>`
 */
export declare class HaAdaptiveDialog extends LitElement {
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    open: boolean;
    type: "alert" | "standard";
    width: DialogWidth;
    preventScrimClose: boolean;
    headerTitle?: string;
    headerSubtitle?: string;
    headerSubtitlePosition: "above" | "below";
    allowModeChange: boolean;
    withoutHeader: boolean;
    hideCloseButton: boolean;
    flexContent: boolean;
    mode: DialogSheetMode;
    protected _i18n?: ContextType<typeof internationalizationContext>;
    private _unsubMediaQuery?;
    private _modeSet;
    connectedCallback(): void;
    protected get _defaultAriaLabelledBy(): string;
    protected _renderCloseButton(slotName: "navigationIcon" | "headerNavigationIcon"): import("lit-html").TemplateResult<1>;
    protected _renderHeaderContent(): import("lit-html").TemplateResult<1>;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-adaptive-dialog": HaAdaptiveDialog;
    }
}
export {};
