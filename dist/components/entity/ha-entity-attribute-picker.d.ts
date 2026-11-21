import { LitElement } from "lit";
import "../ha-generic-picker";
declare class HaEntityAttributePicker extends LitElement {
    entityId?: string | string[];
    /**
     * List of attributes to be hidden.
     * @type {Array}
     * @attr hide-attributes
     */
    hideAttributes?: string[];
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomValue: any;
    label?: string;
    value?: string;
    helper?: string;
    private _stateObjs?;
    private _formatEntityAttributeName;
    private _localize;
    private _getItemsMemoized;
    private _getItems;
    private _valueRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-attribute-picker": HaEntityAttributePicker;
    }
}
export {};
