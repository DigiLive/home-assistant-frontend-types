import { LitElement } from "lit";
import "../../../components/chips/ha-assist-chip";
import "../../../components/chips/ha-chip-set";
import "../../../components/chips/ha-input-chip";
import "../../../components/ha-combo-box-item";
import "../../../components/ha-generic-picker";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import type { EntityIdFormat } from "../../../data/entity_id_format";
export declare class HaEntityIdFormatEditor extends LitElement {
    private _localize;
    value: EntityIdFormat;
    label?: string;
    disabled: boolean;
    private _picker?;
    private _editIndex?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _addItem;
    private _editItem;
    private _moveItem;
    private _removeItem;
    private _pickerValueChanged;
    private _setValue;
    private _formatType;
    private _getItems;
    private _getPickerValue;
    private _getFilteredItems;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-id-format-editor": HaEntityIdFormatEditor;
    }
}
