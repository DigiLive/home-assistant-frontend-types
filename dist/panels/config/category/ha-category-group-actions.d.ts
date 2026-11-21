import { LitElement, nothing } from "lit";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import type { CategoryRegistryEntry } from "../../../data/category_registry";
export declare class HaCategoryGroupActions extends LitElement {
    category?: CategoryRegistryEntry;
    scope?: string;
    onDeleted?: (categoryId: string) => void;
    private _localize;
    private _api;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _deleteCategory;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-category-group-actions": HaCategoryGroupActions;
    }
}
