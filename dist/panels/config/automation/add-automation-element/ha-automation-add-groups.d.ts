import { LitElement, type PropertyValues } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-section-title";
import "../../../../components/ha-svg-icon";
import "../../../../components/item/ha-list-item-button";
import "../../../../components/list/ha-list-base";
import type { AddElementType, CollectionGroup, RecentElement } from "./types";
/**
 * @element ha-automation-add-groups
 *
 * @summary The groups of the "by type" tab, below the recently used elements.
 *
 * @fires group-selected - A group was clicked.
 * @fires recent-element-selected - A recently used element was clicked.
 * @fires clear-recent-elements - The recently used elements should be cleared.
 */
export declare class HaAutomationAddGroups extends LitElement {
    type: AddElementType;
    collections: CollectionGroup[];
    recentElements: RecentElement[];
    selectedGroup?: string;
    narrow: boolean;
    replacingItemKey?: string;
    private _i18n;
    private _selectedItem?;
    private _scrollToSelected;
    /** Scrolls to the selected group once it is rendered. */
    scrollToSelected(): void;
    protected updated(changedProps: PropertyValues<this>): void;
    private _scrollIfPending;
    protected render(): import("lit-html").TemplateResult<1>;
    private _isCurrent;
    private _renderIcon;
    private _groupSelected;
    private _recentSelected;
    private _clearRecentElements;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-add-groups": HaAutomationAddGroups;
    }
    interface HASSDomEvents {
        "group-selected": {
            group: string;
            collectionIndex: number;
        };
        "recent-element-selected": {
            value: string;
        };
        "clear-recent-elements": undefined;
    }
}
