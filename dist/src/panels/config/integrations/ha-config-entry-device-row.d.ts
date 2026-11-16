import { LitElement } from "lit";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-tree-indicator";
import "../../../components/item/ha-list-item-button";
import { type ConfigEntry } from "../../../data/config_entries";
import { type DeviceRegistryEntry } from "../../../data/device/device_registry";
import type { EntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { HomeAssistant } from "../../../types";
declare class HaConfigEntryDeviceRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    entry: ConfigEntry;
    device: DeviceRegistryEntry;
    entities: EntityRegistryEntry[];
    isChild: boolean;
    isLastChild: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getEntities;
    private _handleMenuAction;
    private _handleEditDeviceButton;
    private _handleEditDevice;
    private _handleNavigateToEntities;
    private _doDisableDevice;
    private _handleDeleteDevice;
    private _handleNavigateToDevice;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-entry-device-row": HaConfigEntryDeviceRow;
    }
}
export {};
