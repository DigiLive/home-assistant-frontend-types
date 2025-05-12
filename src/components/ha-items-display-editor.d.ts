import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon";
import "./ha-icon-button";
import "./ha-icon-next";
import "./ha-md-list";
import "./ha-md-list-item";
import "./ha-sortable";
import "./ha-svg-icon";
export interface DisplayItem {
    icon?: string | Promise<string | undefined>;
    iconPath?: string;
    value: string;
    label: string;
    description?: string;
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
    hass: HomeAssistant;
    items: DisplayItem[];
    showNavigationButton: boolean;
    value: DisplayValue;
    actionsRenderer?: (item: DisplayItem) => TemplateResult<1> | typeof nothing;
    private _showIcon;
    private _toggle;
    private _itemMoved;
    private _navigate;
    private _visibleItems;
    private _allItems;
    private _hiddenItems;
    protected render(): TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-items-display-editor": HaItemDisplayEditor;
    }
}
