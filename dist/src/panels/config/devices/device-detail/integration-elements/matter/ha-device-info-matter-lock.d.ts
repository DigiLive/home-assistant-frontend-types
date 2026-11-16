import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../../components/ha-expansion-panel";
import "../../../../../../components/ha-svg-icon";
import type { DeviceRegistryEntry } from "../../../../../../data/device/device_registry";
import type { HomeAssistant } from "../../../../../../types";
export declare class HaDeviceInfoMatterLock extends LitElement {
    hass: HomeAssistant;
    device: DeviceRegistryEntry;
    private _events;
    private _lockEntityId?;
    private _isLock;
    private _prevLockState?;
    private _eventEntityIds?;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private _findLockEntity;
    private _updateEvents;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _formatTime;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-info-matter-lock": HaDeviceInfoMatterLock;
    }
}
