import type { CSSResultGroup } from "lit";
import { HaIconButton } from "./ha-icon-button";
/**
 * @element ha-outlined-icon-button
 * @extends {HaIconButton}
 *
 * @summary
 * Icon button with a circular outline.
 *
 * @cssprop --ha-icon-button-size - Size of the button. Defaults to `40px`.
 * @cssprop --ha-outlined-icon-button-outline-color - Color of the outline. Defaults to `--secondary-text-color`.
 */
export declare class HaOutlinedIconButton extends HaIconButton {
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-outlined-icon-button": HaOutlinedIconButton;
    }
}
