import { LitElement, type nothing, type TemplateResult } from "lit";
import { type HASSDomEvent } from "../../common/dom/fire_event";
import type { HaListItemBase } from "../item/ha-list-item-base";
import "./types";
import type { HaListItemRegistrationDetail, HaListMoveTarget } from "./types";
/**
 * @element ha-list-base
 * @extends {LitElement}
 *
 * @summary
 * Base list container with roving-tabindex keyboard navigation (ArrowUp/Down,
 * Home/End, optional Enter/Space activation, optional wrap-focus). Tracks
 * `HaListItemBase` descendants via the `ha-list-item-register` /
 * `ha-list-item-unregister` events they fire on connect/disconnect — works
 * across any nesting depth and shadow boundaries. Subclasses override
 * `hostRole` and/or `render()` to specialize.
 *
 * @slot - List items (`<ha-list-item-*>`).
 *
 * @csspart base - The outer container (`<div role="list">`).
 *
 * @cssprop --ha-list-gap - Spacing between items. Defaults to `0`.
 * @cssprop --ha-list-padding - Padding around the list content. Defaults to `0`.
 *
 * With `virtual-focus`, DOM focus stays outside the list, for example in a
 * search field. The list then ignores key presses. The element that owns the
 * focus drives navigation with `moveActiveItem()`, and the list marks the row
 * it points at with the `active` attribute instead of focusing it.
 *
 * @attr {boolean} wrap-focus - Whether ArrowUp/Down navigation wraps at the ends.
 * @attr {boolean} virtual-focus - Keep DOM focus outside the list and mark the active row instead.
 * @attr {string} aria-label - Accessible label for the list.
 *
 * @fires ha-list-activated - Fired when an item is activated via Enter/Space. `detail: { index, item }`.
 */
export declare class HaListBase extends LitElement {
    wrapFocus: boolean;
    /**
     * Keep DOM focus outside the list. The list does not handle keys and marks
     * the active row with `active` instead of focusing it. Drive navigation with
     * `moveActiveItem()`.
     */
    virtualFocus: boolean;
    ariaLabel: string | null;
    items: readonly HaListItemBase[];
    /** Host `role` attribute. Empty string means no role is set. */
    protected readonly hostRole: string;
    protected activeItemIndex: number;
    protected firstFocusableIndex: number;
    protected lastFocusableIndex: number;
    protected hasFocusableItem: boolean;
    private _activeItem?;
    private _unbindKeys?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    focus(options?: FocusOptions): void;
    focusItemAtIndex(index: number): void;
    getActiveItemIndex(): number;
    /**
     * Move the active row, skipping rows that are not interactive or disabled.
     * With `virtual-focus`, the row is marked `active` and scrolled into view;
     * otherwise it is focused.
     */
    moveActiveItem(target: HaListMoveTarget): void;
    /** Clear the active row, so no row is marked `active`. */
    clearActiveItem(): void;
    setActiveItemIndex(index: number, focusItem?: boolean): void;
    /**
     * Hook called whenever the items array has changed. Subclasses can override
     * to layer in extra bookkeeping (e.g. selection state sync).
     */
    updateListItems(): void;
    protected onItemRegister: (ev: HASSDomEvent<HaListItemRegistrationDetail>) => void;
    protected onItemUnregister: (ev: HASSDomEvent<HaListItemRegistrationDetail>) => void;
    protected recomputeFocusableIndexes(): void;
    protected render(): TemplateResult | typeof nothing;
    protected isFocusable(index: number): boolean;
    /**
     * Apply the active row. With `virtual-focus`, `focusItem` scrolls the active
     * row into view instead of focusing it.
     */
    protected applyActive(focusItem: boolean): void;
    protected onFocusIn: (ev: FocusEvent) => void;
    private _ignoreKeyEvent;
    private _onForward;
    private _onBack;
    private _onHome;
    private _onEnd;
    private _onPageDown;
    private _onPageUp;
    private _targetIndex;
    /**
     * Number of items to jump for PageUp/PageDown. Defaults to 10 (per WAI-ARIA
     * Authoring Practices: "moves focus a manageable number of nodes,
     * typically 10"). Subclasses with a known viewport (e.g. virtualized lists)
     * can override to use the visible page size.
     */
    protected getPageSize(): number;
    protected onActivate: (ev: KeyboardEvent) => void;
    protected moveFocus(ev: KeyboardEvent, next: number): void;
    /** Make `next` the active row and focus it (or reveal it with `virtual-focus`). */
    protected moveActiveTo(next: number): void;
    protected get itemCount(): number;
    /**
     * Step from `from` by `delta`, skipping non-interactive and disabled items.
     * Pass `count` > 1 to advance by multiple focusable items (PageUp/Down).
     * Returns the last focusable index reached, or `from` when none is.
     */
    private _stepIndex;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-base": HaListBase;
    }
}
