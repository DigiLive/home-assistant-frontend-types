import { LitElement } from "lit";
import "../chips/ha-assist-chip";
import "../chips/ha-chip-set";
import "../chips/ha-input-chip";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "../ha-input-helper-text";
import "../ha-sortable";
export declare class HaStateContentPicker extends LitElement {
    entityId?: string;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowName: boolean;
    allowContext: boolean;
    label?: string;
    value?: string[] | string;
    helper?: string;
    private _picker?;
    private _stateObj?;
    private _registries;
    private _formatEntityAttributeName;
    private _localize;
    private _editIndex?;
    private _getItems;
    private _items;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderHelper;
    private _addItem;
    private _editItem;
    private get _value();
    private _getItemLabel;
    private _toValue;
    private _getPickerValue;
    private _customValueOption;
    private _getFilteredItems;
    private _getAdditionalItems;
    private _searchFn;
    private _moveItem;
    private _removeItem;
    private _pickerValueChanged;
    private _setValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-state-content-picker": HaStateContentPicker;
    }
}
