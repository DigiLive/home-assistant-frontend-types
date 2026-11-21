import { LitElement } from "lit";
import "./chips/ha-chip-set";
import "./chips/ha-input-chip";
import "./ha-combo-box-item";
import "./ha-domain-icon";
import "./ha-generic-picker";
import "./ha-button";
import "./ha-svg-icon";
import "./ha-input-helper-text";
import "./ha-tree-indicator";
export declare class HaEntityTypePicker extends LitElement {
    value?: string[];
    label?: string;
    helper?: string;
    disabled: boolean;
    private _i18n?;
    private _states?;
    private _picker?;
    private _titlesLoaded;
    protected willUpdate(): void;
    private _chipLabels;
    private _items;
    private _availableItems;
    private _getItems;
    private _searchFn;
    private _rowRenderer;
    private _renderIcon;
    protected render(): import("lit-html").TemplateResult<1>;
    private _openPicker;
    private _itemAdded;
    private _removeItem;
    private _setValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-type-picker": HaEntityTypePicker;
    }
}
