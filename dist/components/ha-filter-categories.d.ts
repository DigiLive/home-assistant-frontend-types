import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "./ha-dropdown";
import "./ha-dropdown-item";
import "./ha-expansion-panel";
import "./ha-icon";
import "./ha-list-item";
import "./item/ha-list-item-option";
import "./list/ha-list-selectable";
export declare class HaFilterCategories extends LitElement {
    private _localize;
    private _api;
    private _connection?;
    value?: string[];
    scope?: string;
    narrow: boolean;
    expanded: boolean;
    private _categories;
    private _content;
    private _panel;
    private _unsubCategories?;
    private _categoriesConnection?;
    private _categoriesScope?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _subscribeCategories;
    private _unsubscribeCategories;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _editCategory;
    private _deleteCategory;
    private _addCategory;
    private _expandedChanged;
    private _handleMenuKeydown;
    private _categoryAdded;
    private _categoryRemoved;
    private _setValue;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-categories": HaFilterCategories;
    }
}
