import { LitElement } from "lit";
import "../../../../../../components/ha-icon-next";
import "../../../../../../components/item/ha-list-item-button";
import "../../../../../../components/list/ha-list-base";
import type { HomeAssistant } from "../../../../../../types";
declare class MatterAddDeviceExisting extends LitElement {
    hass: HomeAssistant;
    render(): import("lit-html").TemplateResult<1>;
    private _onItemClick;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-add-device-existing": MatterAddDeviceExisting;
    }
}
export {};
