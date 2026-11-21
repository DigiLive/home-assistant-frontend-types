import type { LitVirtualizer } from "@lit-labs/virtualizer";
import type { RenderItemFunction } from "@lit-labs/virtualizer/virtualize.js";
import { nothing, type PropertyValues, type TemplateResult } from "lit";
import { type HASSDomEvent } from "../../common/dom/fire_event";
import { HaListBase } from "./ha-list-base";
import type { HaListItemRegistrationDetail } from "./types";
/**
 * A single row in a {@link HaListVirtualized}. Identified by a stable `id`
 * used as the virtualizer key. Extra fields are passed through to the
 * `rowRenderer`.
 */
export interface HaListVirtualizedItem {
    /** Stable key used by the virtualizer to track the row across re-renders. */
    id: string;
    /** Whether the row can be focused and activated. Defaults to `false`. */
    interactive?: boolean;
    disabled?: boolean;
    [key: string]: unknown;
}
/**
 * @element ha-list-virtualized
 * @extends {HaListBase}
 *
 * @summary
 * Virtualized list. Renders only the rows currently in view to keep large
 * lists performant, while preserving the roving-tabindex keyboard navigation
 * of {@link HaListBase}.
 *
 * @csspart base - The scrollable outer container (`<div>`).
 *
 * @attr {number} pin-index - Row index to scroll to when the list first
 * renders. Cleared once the user scrolls.
 * @attr {string} pin-block - Block alignment for `pin-index`: `start`,
 * `center` (default), `end`, or `nearest`.
 *
 * @fires ha-list-activated - Fired when a row is activated via Enter/Space. `detail: { index, item }`.
 * @cssprop --ha-list-scroll-padding-block-start - Space at the top of the scroll area that revealed rows stay below, like for an overlaid header. Defaults to `0px`.
 *
 * @fires ha-list-visibility-changed - Fired when the range of visible rows changes. `detail: { first, last }`.
 */
export declare class HaListVirtualized extends HaListBase {
    private _virtualizerReady;
    /**
     * The list data. Each item is rendered by `rowRenderer`; its `interactive`
     * and `disabled` flags determine whether the row is focusable.
     */
    rows: HaListVirtualizedItem[];
    /** Renders a single row from its data and index. */
    rowRenderer?: RenderItemFunction<HaListVirtualizedItem>;
    /** Row index to scroll to on first render (the "pinned" row). */
    pinIndex?: number;
    /** Block alignment used when scrolling to `pinIndex`. */
    pinBlock: "start" | "center" | "end" | "nearest";
    private _unpinned;
    protected virtualizerElement?: LitVirtualizer<HaListVirtualizedItem>;
    protected rangeStart: number;
    protected rangeEnd: number;
    private _activeItemFocus;
    private _scrollToActiveItem;
    willUpdate(changedProps: PropertyValues): void;
    /** The element that scrolls the rows, once the virtualizer has rendered. */
    get scrollElement(): HTMLElement | undefined;
    /** Scroll the row at `index` into view. */
    scrollToIndex(index: number, block?: ScrollLogicalPosition): void;
    private _loadVirtualizer;
    protected render(): TemplateResult | typeof nothing;
    /**
     * Sets the active (roving-tabindex) row. If the row is outside the rendered
     * range it is scrolled into view first, then activated/focused once the
     * virtualizer has laid it out.
     * @param index - Row index to make active; clamped to the valid range.
     * @param focusItem - Whether to move DOM focus to the row.
     */
    setActiveItemIndex(index: number, focusItem?: boolean): void;
    /**
     * Focuses the row at `index`, scrolling it into view if needed. No-op until
     * the virtualizer is ready or when `index` is negative.
     */
    focusItemAtIndex(index: number): void;
    protected applyActive(focusItem: boolean): void;
    private _applyVirtualActive;
    private _handleVisibilityChanged;
    private _handleRangeChanged;
    private _applySetSize;
    protected onFocusIn: (ev: FocusEvent) => void;
    protected onActivate: (ev: KeyboardEvent) => void;
    protected isFocusable(index: number): boolean;
    protected get itemCount(): number;
    protected moveActiveTo(next: number): void;
    protected getPageSize(): number;
    private _keyFunction;
    private _getRenderItem;
    private _handleUnpinned;
    protected onItemRegister: (ev: HASSDomEvent<HaListItemRegistrationDetail>) => void;
    protected onItemUnregister: (ev: HASSDomEvent<HaListItemRegistrationDetail>) => void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-virtualized": HaListVirtualized;
    }
}
