import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import { type EntityNameItem } from "../../common/entity/compute_entity_name_display";
import "../chips/ha-chip-set";
import "../chips/ha-input-chip";
import "../ha-button";
import "../ha-button-toggle-group";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "../ha-icon-button";
import "../ha-input-helper-text";
import "../ha-sortable";
import "../input/ha-input";
export declare class HaEntityNamePicker extends LitElement {
    entityId?: string;
    value?: string | EntityNameItem | EntityNameItem[];
    defaultValue?: string | EntityNameItem | EntityNameItem[];
    label?: string;
    helper?: string;
    required: boolean;
    disabled: boolean;
    allowCustom: boolean;
    private _mode?;
    private _stateObj?;
    private _registries;
    private _localize;
    private _formatEntityName;
    private _picker?;
    private _addButton?;
    private _editIndex?;
    connectedCallback(): void;
    protected willUpdate(_changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderTextInput;
    private _renderRestoreButton;
    private _renderPicker;
    private _modeChanged;
    private _restore;
    private _textInputChanged;
    private _addItem;
    private _editItem;
    private _moveItem;
    private _removeItem;
    private _pickerValueChanged;
    private _setValue;
    private get _items();
    private _defaultItems;
    private _toItems;
    private _toValue;
    private _formatItem;
    private _validTypes;
    private _getItems;
    private _customNameOption;
    private _getPickerValue;
    private _getFilteredItems;
    private _searchFn;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-name-picker": HaEntityNamePicker;
    }
}
