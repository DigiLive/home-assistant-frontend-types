import { LitElement, nothing, type PropertyValues } from "lit";
import "../../../../../../components/ha-area-picker";
import "../../../../../../components/input/ha-input";
import "../../../../../../components/ha-select";
import "../../../../../../components/ha-dropdown-item";
import type { ExtEntityRegistryEntry } from "../../../../../../data/entity/entity_registry";
import type { DeviceRegistryEntry } from "../../../../../../data/device/device_registry";
import type { HomeAssistant } from "../../../../../../types";
declare global {
    interface HASSDomEvents {
        "device-added-changed": {
            name: string;
            area: string | undefined;
            deviceClass: string | undefined;
            hasPendingUpdates: boolean;
        };
    }
}
declare class MatterAddDeviceDeviceAdded extends LitElement {
    hass: HomeAssistant;
    device: DeviceRegistryEntry;
    mainEntity?: ExtEntityRegistryEntry;
    proposedName?: string;
    private _deviceName;
    private _area;
    private _deviceClass;
    private _initialized;
    private _deviceClassInitialized;
    protected willUpdate(changedProps: PropertyValues): void;
    private get _deviceClassOptions();
    private get _hasPendingUpdates();
    protected updated(changedProps: Map<string, unknown>): void;
    private _deviceClassesSorted;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _deviceNameChanged;
    private _areaPicked;
    private _deviceClassChanged;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-add-device-device-added": MatterAddDeviceDeviceAdded;
    }
}
export {};
