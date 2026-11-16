import DropdownItem from "@home-assistant/webawesome/dist/components/dropdown-item/dropdown-item";
import "@home-assistant/webawesome/dist/components/icon/icon";
import { type CSSResultGroup } from "lit";
import "./ha-svg-icon";
/**
 * Home Assistant dropdown item component
 *
 * @element ha-dropdown-item
 * @extends {DropdownItem}
 *
 * @summary
 * A stylable dropdown item component supporting Home Assistant theming, variants, and appearances based on webawesome dropdown item.
 *
 */
export declare class HaDropdownItem extends DropdownItem {
    selected: boolean;
    protected renderCheckboxIcon(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dropdown-item": HaDropdownItem;
    }
}
