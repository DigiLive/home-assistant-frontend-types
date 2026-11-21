import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-icon";
import "../../../../components/ha-label";
import type { DeviceRegistryEntry } from "../../../../data/device/device_registry";
import type { HomeAssistant } from "../../../../types";
export declare class HaDeviceCard extends LitElement {
    hass: HomeAssistant;
    device: DeviceRegistryEntry;
    narrow: boolean;
    private _labelRegistry?;
    private _labelsData;
    protected render(): TemplateResult;
    protected _getAddresses(): [string, string][];
    private _computeDeviceNameDisplay;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-info-card": HaDeviceCard;
    }
}
