import { LitElement } from "lit";
import "./ha-entity-picker";
import "../ha-sortable";
import "../ha-svg-icon";
import type { HaEntityPickerEntityFilterFunc } from "../../data/entity/entity";
import "./ha-favorite-entity-list-item";
export declare class HaFavoritesEditor extends LitElement {
    favorites: string[];
    label?: string;
    helper?: string;
    entityFilter?: HaEntityPickerEntityFilterFunc;
    addButtonLabel?: string;
    protected render(): import("lit-html").TemplateResult<1>;
    private _update;
    private _add;
    private _remove;
    private _moved;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-favorites-editor": HaFavoritesEditor;
    }
}
