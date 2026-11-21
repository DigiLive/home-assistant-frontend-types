import Radio from "@home-assistant/webawesome/dist/components/radio/radio";
import { type CSSResultGroup } from "lit";
/**
 * Home Assistant radio option component
 *
 * @element ha-radio-option
 * @extends {Radio}
 *
 * @summary
 * A Home Assistant themed radio built on top of the Web Awesome radio.
 * Intended to be used as a child of `ha-radio-group`.
 *
 * @slot - The radio option's label.
 *
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart checked-icon - The checked icon.
 * @csspart label - The container that wraps the radio option's label.
 *
 * @cssprop --ha-radio-option-active-color - Accent color used for the checked indicator and border. Defaults to `--ha-color-fill-primary-loud-resting`.
 * @cssprop --ha-radio-option-height - Minimum height of the option in `button` appearance. Defaults to `40px`.
 * @cssprop --ha-radio-option-toggle-size - Size of the radio toggle circle in `default` appearance. Defaults to `20px`.
 * @cssprop --ha-radio-option-border-width - Border width of the radio control. Defaults to `--ha-border-width-md`.
 * @cssprop --ha-radio-option-border-color - Border color of the radio control. Defaults to `--ha-color-border-neutral-normal`.
 * @cssprop --ha-radio-option-border-color-hover - Border color of the radio control on hover. Defaults to `--ha-radio-option-border-color`, then `--ha-color-border-neutral-loud`.
 * @cssprop --ha-radio-option-background-color - Background color of the radio control. Defaults to `--wa-form-control-background-color`.
 * @cssprop --ha-radio-option-background-color-hover - Background color of the radio control on hover. Defaults to `--ha-color-fill-neutral-quiet-hover`.
 * @cssprop --ha-radio-option-checked-background-color - Background color of the radio control when checked. Defaults to `--ha-color-fill-primary-normal-resting`.
 * @cssprop --ha-radio-option-checked-icon-color - Color of the checked indicator dot. Defaults to `--ha-radio-option-active-color`.
 * @cssprop --ha-radio-option-checked-icon-scale - Size of the checked indicator relative to the toggle. Defaults to `0.7`.
 * @cssprop --ha-radio-option-control-margin - Margin around the radio toggle in `default` appearance. Defaults to `var(--ha-space-3) var(--ha-space-2) var(--ha-space-3) var(--ha-space-3)`.
 *
 * @attr {("default"|"button")} appearance - Sets the radio option's visual appearance.
 * @attr {("small"|"medium"|"large")} size - Sets the radio option's size. Overridden by the parent `ha-radio-group`.
 * @attr {boolean} checked - Draws the radio option in a checked state.
 * @attr {boolean} disabled - Disables the radio option.
 */
export declare class HaRadioOption extends Radio {
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-radio-option": HaRadioOption;
    }
}
