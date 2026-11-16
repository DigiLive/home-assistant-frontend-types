import { LitElement, type PropertyValues } from "lit";
import type { ObjectSelector } from "../../data/selector";
import "../ha-input-helper-text";
import "../ha-sortable";
import "../ha-yaml-editor";
import "../item/ha-list-item-base";
import "../list/ha-list-base";
export declare class HaObjectSelector extends LitElement {
    selector: ObjectSelector;
    value?: any;
    label?: string;
    helper?: string;
    placeholder?: string;
    disabled: boolean;
    required: boolean;
    localizeValue?: (key: string, values?: Record<string, string>) => string;
    private _i18n;
    private _registries;
    private _states;
    private _formatEntityName;
    private _yamlEditor?;
    private _valueChangedFromChild;
    private _computeLabel;
    private _computeHelper;
    private _formatField;
    private _renderItem;
    protected render(): import("lit-html").TemplateResult<1>;
    private _formatOptions;
    private _schema;
    private _itemMoved;
    private _addItem;
    private _editItem;
    private _deleteItem;
    protected updated(changedProps: PropertyValues<this>): void;
    private _handleChange;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-object": HaObjectSelector;
    }
}
