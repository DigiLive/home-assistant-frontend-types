import type { CSSResultGroup } from "lit";
import "../list/types";
import { HaRowItem } from "./ha-row-item";
/**
 * @element ha-list-item-base
 * @extends {HaRowItem}
 *
 * @summary
 * Non-interactive list row (role `listitem`). Base class for
 * `ha-list-item-button`, `ha-list-item-option`.
 *
 * @cssprop --ha-list-item-focus-radius - Focus outline border-radius.
 * @cssprop --ha-list-item-focus-width - Focus outline width (steady state).
 * @cssprop --ha-list-item-focus-width-start - Focus outline width at the start of the focus-in animation.
 * @cssprop --ha-list-item-focus-offset - Focus outline offset.
 * @cssprop --ha-list-item-focus-background - Background color applied on keyboard focus.
 * @cssprop --ha-list-item-active-background - Background color of the active row in a list with `virtual-focus`. Defaults to `--ha-list-item-focus-background`.
 *
 * @attr {boolean} interactive - Opts the row into the parent list's roving tabindex. Interactive subclasses set this automatically.
 * @attr {boolean} active - Set by a parent list with `virtual-focus` on the row that keyboard navigation points at.
 */
export declare class HaListItemBase extends HaRowItem {
    /**
     * Whether the item takes keyboard focus. Read by the parent list to decide
     * if it should be part of the roving-tabindex ring. Interactive subclasses
     * (`ha-list-item-button`, `-option`, `-todo`) override the default to `true`.
     * For the plain base row, set the `interactive` attribute to opt into focus
     * (useful for sortable rows where you need keyboard reorder but no click
     * action).
     */
    interactive: boolean;
    /**
     * Whether keyboard navigation points at this row while DOM focus stays
     * outside the list. Set by a parent list with `virtual-focus`.
     */
    active: boolean;
    /** Host `role` attribute. Subclasses override. */
    protected readonly defaultRole: string;
    private _list?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Activate the item (Enter/Space from the parent list). Default dispatches
     * a click on the host. Subclasses that wrap a native element (e.g. `<a>`)
     * override this to click the inner element so browser default actions
     * (like anchor navigation) fire.
     */
    activate(): void;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-item-base": HaListItemBase;
    }
}
