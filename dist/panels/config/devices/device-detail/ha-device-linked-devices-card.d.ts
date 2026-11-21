import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-list-item";
import type { ConfigEntry } from "../../../../data/config_entries";
import type { HomeAssistant } from "../../../../types";
export declare class HaDeviceLinkedDevicesCard extends LitElement {
    hass: HomeAssistant;
    deviceId: string;
    entries: ConfigEntry[];
    private _linkedDeviceIds;
    private _entryLookup;
    private _linkedDevices;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _deviceDomain;
    private _fetchLinkedDevices;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-linked-devices-card": HaDeviceLinkedDevicesCard;
    }
}
