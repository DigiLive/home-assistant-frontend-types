import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../ha-button";
import "../ha-icon-button";
import "../ha-input-helper-text";
import "../ha-sortable";
import "./ha-input";
import type { InputType } from "./ha-input";
/**
 * Home Assistant multi-value input component
 *
 * @element ha-input-multi
 * @extends {LitElement}
 *
 * @summary
 * A dynamic list of text inputs that allows adding, removing, and optionally reordering values.
 * Useful for managing arrays of strings such as URLs, tags, or other repeated text values.
 *
 * @attr {boolean} disabled - Disables all inputs and buttons.
 * @attr {boolean} sortable - Enables drag-and-drop reordering of items.
 * @attr {boolean} item-index - Appends a 1-based index number to each item's label.
 * @attr {boolean} update-on-blur - Fires value-changed on blur instead of on input.
 *
 * @fires value-changed - Fired when the list of values changes. `event.detail.value` contains the new string array.
 */
declare class HaInputMulti extends LitElement {
    value?: string[];
    disabled: boolean;
    label?: string;
    helper?: string;
    inputType?: InputType;
    inputSuffix?: string;
    inputPrefix?: string;
    autocomplete?: string;
    /** Regular expression each entry is validated against (HTML `pattern`). */
    pattern?: string;
    /** Message shown on an entry when it fails `pattern` validation. */
    validationMessage?: string;
    addLabel?: string;
    removeLabel?: string;
    itemIndex: boolean;
    max?: number;
    sortable: boolean;
    updateOnBlur: boolean;
    private _i18n?;
    private _lastInput?;
    private _inputs?;
    private _keys;
    protected willUpdate(changedProps: PropertyValues): void;
    reportValidity(): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private get _items();
    private _addItem;
    private _editItem;
    private _keyDown;
    private _itemMoved;
    private _removeItem;
    private _fireChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input-multi": HaInputMulti;
    }
}
export {};
