import type { DeviceRegistryEntry } from "../../../../../../data/device/device_registry";
import type { HomeAssistant } from "../../../../../../types";
import type { DeviceAction } from "../../../ha-config-device-page";
export declare const getESPHomeDeviceActions: (el: HTMLElement, hass: HomeAssistant, device: DeviceRegistryEntry) => Promise<DeviceAction[]>;
