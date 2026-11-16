import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-outlined-icon-button";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
export declare class HaMoreInfoFavorites extends LitElement {
    items: unknown[];
    renderItem?: (item: unknown, index: number, editMode: boolean) => TemplateResult;
    deleteLabel?: (index: number) => string;
    editMode: boolean;
    disabled: boolean;
    isAdmin: boolean;
    showAdd: boolean;
    showDone: boolean;
    addLabel: string;
    doneLabel: string;
    private _itemMoved;
    private _handleItemAction;
    private _handleDelete;
    private _handleAdd;
    private _handleDone;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HASSDomEvents {
        "favorite-item-action": {
            index: number;
            action: string;
        };
        "favorite-item-delete": {
            index: number;
        };
        "favorite-item-add": any;
        "favorite-item-done": any;
        "favorite-item-moved": {
            oldIndex: number;
            newIndex: number;
        };
    }
    interface HTMLElementTagNameMap {
        "ha-more-info-favorites": HaMoreInfoFavorites;
    }
}
