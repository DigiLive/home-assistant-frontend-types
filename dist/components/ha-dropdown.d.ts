import Dropdown from "@home-assistant/webawesome/dist/components/dropdown/dropdown";
import { type CSSResultGroup } from "lit";
import type { HaDropdownItem } from "./ha-dropdown-item";
import type { HaIconButton } from "./ha-icon-button";
/**
 * Event type for the ha-dropdown component when an item is selected.
 * @param TValue - The type of the selected item's `value`.
 * @param TData - The type of the selected item's `data` when set on `ha-dropdown-item`.
 */
export type HaDropdownSelectEvent<TValue = string, TData = undefined> = [
    TData
] extends [undefined] ? CustomEvent<{
    item: Omit<HaDropdownItem, "value"> & {
        value: TValue;
    };
}> : CustomEvent<{
    item: Omit<HaDropdownItem, "value"> & {
        value: TValue;
        data: TData;
    };
}>;
/**
 * Home Assistant dropdown component
 *
 * @element ha-dropdown
 * @extends {Dropdown}
 *
 * @summary
 * A stylable dropdown component supporting Home Assistant theming, variants, and appearances based on webawesome dropdown.
 *
 */
export declare class HaDropdown extends Dropdown {
    dropdownTag: string;
    dropdownItemTag: string;
    get anchorElement(): HTMLButtonElement | HaIconButton | undefined;
    set anchorElement(element: HTMLButtonElement | HaIconButton | undefined);
    /** Get the slotted trigger button, a <wa-button> or <button> element */
    private getTrigger;
    private showMenu;
    private hideMenu;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dropdown": HaDropdown;
    }
}
