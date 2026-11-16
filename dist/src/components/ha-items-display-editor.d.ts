import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "./ha-icon";
import "./ha-icon-button";
import "./ha-icon-next";
import "./ha-sortable";
import "./ha-svg-icon";
import "./item/ha-list-item-button";
import "./list/ha-list-base";
export interface DisplayItem {
    icon?: string | Promise<string | undefined>;
    iconPath?: string;
    value: string;
    label: string;
    description?: string;
    disableSorting?: boolean;
    disableHiding?: boolean;
}
export interface DisplayValue {
    order: string[];
    hidden: string[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-items-display-editor": HaItemDisplayEditor;
    }
    interface HASSDomEvents {
        "item-display-navigate-clicked": {
            value: string;
        };
    }
}
export declare class HaItemDisplayEditor extends LitElement {
    private _localize;
    items: DisplayItem[];
    showNavigationButton: boolean;
    dontSortVisible: boolean;
    value: DisplayValue;
    actionsRenderer?: (item: DisplayItem) => TemplateResult<1> | typeof nothing;
    /**
     * Used to sort items by keyboard navigation.
     */
    private _dragIndex;
    private _showIcon;
    protected render(): TemplateResult<1>;
    private _toggle;
    private _itemMoved;
    private _moveItem;
    private _navigate;
    private _visibleItems;
    private _allItems;
    private _hiddenItems;
    private _maxSortableIndex;
    private _keyActivatedMove;
    private _sortKeydown;
    private _listElementKeydown;
    private _dragHandleKeydown;
    disconnectedCallback(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-items-display-editor": HaItemDisplayEditor;
    }
}
