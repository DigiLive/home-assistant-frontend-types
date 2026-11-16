import type { AreaRegistryEntry } from "../../../data/area/area_registry";
import type { DeviceRegistryEntry } from "../../../data/device/device_registry";
import type { HomeAssistant } from "../../../types";
/**
 * Return the effective area id of a device: a child device without an area of
 * its own inherits its parent's area (mirrors core's
 * async_get_effective_area_id). Nesting is single-level, so no recursion.
 */
export declare const getDeviceAreaId: (device: DeviceRegistryEntry, devices: HomeAssistant["devices"]) => string | undefined;
export declare const getDeviceArea: (device: DeviceRegistryEntry, areas: HomeAssistant["areas"], devices: HomeAssistant["devices"]) => AreaRegistryEntry | undefined;
