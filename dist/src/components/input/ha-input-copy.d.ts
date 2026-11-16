import { LitElement } from "lit";
import "../ha-button";
import "../ha-icon-button";
import "../ha-svg-icon";
import "./ha-input";
import type { InputType } from "./ha-input";
/**
 * Home Assistant input with copy button
 *
 * @element ha-input-copy
 * @extends {LitElement}
 *
 * @summary
 * A read-only input component with a copy-to-clipboard button.
 * Supports optional value masking with a toggle to reveal the hidden value.
 *
 * @attr {string} value - The value to display and copy.
 * @attr {string} masked-value - An alternative masked display value (for example, "••••••").
 * @attr {string} label - Label for the copy button. Defaults to the localized "Copy" text.
 * @attr {boolean} readonly - Makes the inner input readonly.
 * @attr {boolean} disabled - Disables the inner input.
 * @attr {boolean} masked-toggle - Shows a toggle button to reveal/hide the masked value.
 * @attr {("text"|"password"|"email"|"number"|"tel"|"url"|"search"|"date"|"datetime-local"|"time"|"color")} type - Sets the input type.
 * @attr {string} placeholder - Placeholder text for the input.
 * @attr {string} validation-message - Custom validation message.
 * @attr {boolean} auto-validate - Validates the input on blur.
 */
export declare class HaInputCopy extends LitElement {
    value: string;
    maskedValue?: string;
    label?: string;
    readonly: boolean;
    disabled: boolean;
    maskedToggle: boolean;
    type: InputType;
    placeholder: string;
    validationMessage?: string;
    autoValidate: boolean;
    private _i18n;
    private _showMasked;
    private _inputElement?;
    reportValidity(): boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _focusInput;
    private _toggleMasked;
    private _copy;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input-copy": HaInputCopy;
    }
}
