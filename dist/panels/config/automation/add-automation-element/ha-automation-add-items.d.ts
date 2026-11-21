import { LitElement, type PropertyValues } from "lit";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import "../../../../components/item/ha-list-item-button";
import "../../../../components/list/ha-list-base";
import type { ItemsSection } from "./types";
type Target = [string, string | undefined, string | undefined];
/**
 * @element ha-automation-add-items
 *
 * @summary List of automation elements to add, grouped by title.
 *
 * @slot - Footer below the scrolling items, e.g. an action bar.
 *
 * @cssprop --ha-automation-add-items-padding-bottom - Bottom padding of the items list.
 */
export declare class HaAutomationAddItems extends LitElement {
    items?: ItemsSection[];
    error?: string;
    selectLabel: string;
    emptyLabel: string;
    target?: Target;
    tooltipDescription: boolean;
    scrollable: boolean;
    replacingItemKey?: string;
    private _itemsScrolled;
    private _registries;
    private _states;
    private _labelRegistry?;
    private _configEntryLookup?;
    private _itemsDiv;
    private _currentItem?;
    private _scrollToCurrent;
    /** Scrolls to the item being replaced once it is rendered. */
    scrollToCurrent(): void;
    protected updated(changedProps: PropertyValues<this>): void;
    private _scrollIfPending;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderItemList;
    private _isCurrent;
    private _renderCurrentTarget;
    private _renderTarget;
    private _selected;
    private _onItemsScroll;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-add-items": HaAutomationAddItems;
    }
}
export {};
