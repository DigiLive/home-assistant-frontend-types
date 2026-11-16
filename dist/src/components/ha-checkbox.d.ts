import WaCheckbox from "@home-assistant/webawesome/dist/components/checkbox/checkbox";
import { type CSSResultGroup } from "lit";
/**
 * Home Assistant checkbox component
 *
 * @element ha-checkbox
 * @extends {WaCheckbox}
 *
 * @summary
 * A Home Assistant themed wrapper around the Web Awesome checkbox.
 *
 * @slot - The checkbox's label.
 * @slot hint - Text that describes how to use the checkbox.
 *
 * @csspart base - The component's label wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart checked-icon - The checked icon, a `<wa-icon>` element.
 * @csspart indeterminate-icon - The indeterminate icon, a `<wa-icon>` element.
 * @csspart label - The container that wraps the checkbox's label.
 * @csspart hint - The hint's wrapper.
 *
 * @cssprop --ha-checkbox-size - The checkbox size. Defaults to `20px`.
 * @cssprop --ha-checkbox-border-color - The border color of the checkbox control. Defaults to `--ha-color-border-neutral-normal`.
 * @cssprop --ha-checkbox-border-color-hover - The border color of the checkbox control on hover. Defaults to `--ha-checkbox-border-color`, then `--ha-color-border-neutral-loud`.
 * @cssprop --ha-checkbox-background-color - The background color of the checkbox control. Defaults to `--wa-form-control-background-color`.
 * @cssprop --ha-checkbox-background-color-hover - The background color of the checkbox control on hover. Defaults to `--ha-color-form-background-hover`.
 * @cssprop --ha-checkbox-checked-background-color - The background color when checked or indeterminate. Defaults to `--ha-color-fill-primary-loud-resting`.
 * @cssprop --ha-checkbox-checked-background-color-hover - The background color when checked or indeterminate on hover. Defaults to `--ha-color-fill-primary-loud-hover`.
 * @cssprop --ha-checkbox-checked-icon-color - The color of the checked and indeterminate icons. Defaults to `--wa-color-brand-on-loud`.
 * @cssprop --ha-checkbox-checked-icon-scale - The size of the checked and indeterminate icons relative to the checkbox. Defaults to `0.9`.
 * @cssprop --ha-checkbox-border-radius - The border radius of the checkbox control. Defaults to `--ha-border-radius-sm`.
 * @cssprop --ha-checkbox-border-width - The border width of the checkbox control. Defaults to `--ha-border-width-md`.
 * @cssprop --ha-checkbox-min-touch-size - Minimum touch target size around the checkbox. Defaults to `40px`.
 * @cssprop --ha-checkbox-required-marker - The marker shown after the label for required fields. Defaults to `"*"`.
 * @cssprop --ha-checkbox-required-marker-offset - Offset of the required marker. Defaults to `0.1rem`.
 *
 * @attr {boolean} checked - Draws the checkbox in a checked state.
 * @attr {boolean} disabled - Disables the checkbox.
 * @attr {boolean} indeterminate - Draws the checkbox in an indeterminate state.
 * @attr {boolean} required - Makes the checkbox a required field.
 * @attr {("brand"|"neutral"|"danger"|"warning"|"success")} variant - Sets the checked color variant. "brand" is default.
 */
export declare class HaCheckbox extends WaCheckbox {
    variant: "brand" | "neutral" | "success" | "warning" | "danger";
    /**
     * Returns the configured checkbox value, independent of checked state.
     *
     * The base Web Awesome checkbox returns `null` when unchecked to align with
     * form submission rules. Home Assistant components expect the configured value
     * to remain readable, so this wrapper always exposes the internal value.
     */
    get value(): string | null;
    /** Sets the configured checkbox value. */
    set value(val: string | null);
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-checkbox": HaCheckbox;
    }
}
