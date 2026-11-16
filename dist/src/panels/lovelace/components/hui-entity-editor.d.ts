import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-entity-picker";
import "../../../components/ha-icon-button";
import "../../../components/ha-sortable";
import "../../../components/item/ha-list-item-base";
import "../../../components/list/ha-list-base";
import type { HaEntityPickerEntityFilterFunc } from "../../../data/entity/entity";
import type { HomeAssistant } from "../../../types";
import type { EntityConfig } from "../entity-rows/types";
export declare class HuiEntityEditor extends LitElement {
    hass: HomeAssistant;
    entities?: EntityConfig[];
    entityFilter?: HaEntityPickerEntityFilterFunc;
    label?: string;
    required: boolean;
    canEdit?: any;
    private _entityKeys;
    private _getKey;
    private _renderItem;
    private _editItem;
    private _deleteItem;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _addEntity;
    private _entityMoved;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-editor": HuiEntityEditor;
    }
}
