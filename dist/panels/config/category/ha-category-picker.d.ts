import { LitElement } from "lit";
import type { TemplateResult, PropertyValues } from "lit";
import "../../../components/ha-generic-picker";
import "../../../components/ha-svg-icon";
export declare class HaCategoryPicker extends LitElement {
    private _i18n;
    private _api;
    private _connection?;
    scope?: string;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    noAdd: boolean;
    disabled: boolean;
    required: boolean;
    private _categories?;
    private _picker?;
    private _pendingCategoryId?;
    private _unsubCategories?;
    private _categoriesConnection?;
    private _categoriesScope?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    open(): Promise<void>;
    private _subscribeCategories;
    private _unsubscribeCategories;
    private _categoryMap;
    private _computeValueRenderer;
    private _getCategories;
    private _getItems;
    private _allCategoryNames;
    private _getAdditionalItems;
    protected render(): TemplateResult;
    private _valueChanged;
    private _setValue;
    private _notFoundLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-category-picker": HaCategoryPicker;
    }
}
