import Switch from "@home-assistant/webawesome/dist/components/switch/switch";
import { type CSSResultGroup, type PropertyValues } from "lit";
/**
 * Home Assistant switch component
 *
 * @element ha-switch
 * @extends {Switch}
 *
 * @summary
 * A toggle switch component supporting Home Assistant theming, based on the webawesome switch.
 * Represents two states: on and off.
 *
 * @cssprop --ha-switch-size - The size of the switch track height. Defaults to `24px`.
 * @cssprop --ha-switch-thumb-size - The size of the thumb. Defaults to `18px`.
 * @cssprop --ha-switch-width - The width of the switch track. Defaults to `48px`.
 * @cssprop --ha-switch-background-color - Background color of the unchecked track.
 * @cssprop --ha-switch-thumb-background-color - Background color of the unchecked thumb.
 * @cssprop --ha-switch-background-color-hover - Background color of the unchecked track on hover.
 * @cssprop --ha-switch-thumb-background-color-hover - Background color of the unchecked thumb on hover.
 * @cssprop --ha-switch-checked-background-color - Background color of the checked track.
 * @cssprop --ha-switch-checked-thumb-background-color - Background color of the checked thumb.
 * @cssprop --ha-switch-checked-background-color-hover - Background color of the checked track on hover.
 * @cssprop --ha-switch-checked-thumb-background-color-hover - Background color of the checked thumb on hover.
 * @cssprop --ha-switch-border-color - Border color of the unchecked track.
 * @cssprop --ha-switch-thumb-border-color - Border color of the unchecked thumb.
 * @cssprop --ha-switch-thumb-border-color-hover - Border color of the unchecked thumb on hover.
 * @cssprop --ha-switch-checked-border-color - Border color of the checked track.
 * @cssprop --ha-switch-checked-thumb-border-color - Border color of the checked thumb.
 * @cssprop --ha-switch-checked-border-color-hover - Border color of the checked track on hover.
 * @cssprop --ha-switch-checked-thumb-border-color-hover - Border color of the checked thumb on hover.
 * @cssprop --ha-switch-thumb-box-shadow - The box shadow of the thumb. Defaults to `var(--ha-box-shadow-s)`.
 * @cssprop --ha-switch-disabled-opacity - Opacity of the switch when disabled. Defaults to `0.2`.
 * @cssprop --ha-switch-min-touch-size - Minimum touch target size around the switch. Defaults to `40px`.
 * @cssprop --ha-switch-required-marker - The marker shown after the label for required fields. Defaults to `"*"`.
 * @cssprop --ha-switch-required-marker-offset - Offset of the required marker. Defaults to `0.1rem`.
 *
 * @attr {boolean} checked - The checked state of the switch.
 * @attr {boolean} disabled - Disables the switch and prevents user interaction.
 * @attr {boolean} required - Makes the switch a required field.
 * @attr {boolean} haptic - Enables haptic vibration on toggle. Only use when the new state is applied immediately (not when a save action is required).
 */
export declare class HaSwitch extends Switch {
    /**
     * Enables haptic vibration on toggle.
     * Only set to true if the new value of the switch is applied right away when toggling.
     * Do not add haptic when a user is required to press save.
     */
    haptic: boolean;
    updated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    private _forwardHaptic;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-switch": HaSwitch;
    }
}
