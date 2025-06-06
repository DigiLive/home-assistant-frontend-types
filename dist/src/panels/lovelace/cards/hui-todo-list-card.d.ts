import type { PropertyValueMap, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-check-list-item";
import "../../../components/ha-checkbox";
import "../../../components/ha-icon-button";
import "../../../components/ha-list";
import "../../../components/ha-list-item";
import "../../../components/ha-markdown-element";
import "../../../components/ha-relative-time";
import "../../../components/ha-select";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { TodoListCardConfig } from "./types";
export declare class HuiTodoListCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): TodoListCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _entityId?;
    private _items?;
    private _reordering;
    private _unsubItems?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getCardSize(): number;
    setConfig(config: TodoListCardConfig): void;
    protected checkConfig(config: TodoListCardConfig): void;
    protected getEntityId(): string | undefined;
    private _sortItems;
    private _getUncheckedAndItemsWithoutStatus;
    private _getCheckedItems;
    private _getUncheckedItems;
    private _getItemsWithoutStatus;
    willUpdate(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderMenu;
    private _getDueDate;
    private _renderItems;
    private _todoListSupportsFeature;
    private _subscribeItems;
    private _getItem;
    private _requestSelected;
    private _handleKeydown;
    private _openItem;
    private _completeItem;
    private _handleCompletedMenuAction;
    private _clearCompletedItems;
    private get _newItem();
    private _addItem;
    private _deleteItem;
    private _addKeyPress;
    private _handlePrimaryMenuAction;
    private _toggleReorder;
    private _itemMoved;
    private _findFirstItem;
    private _moveItem;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-todo-list-card": HuiTodoListCard;
    }
}
