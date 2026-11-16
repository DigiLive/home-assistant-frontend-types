import type { DeviceRegistryEntry } from "../../data/device/device_registry";
import type { HomeAssistant } from "../../types";
export declare const computeDeviceName: (device: DeviceRegistryEntry) => string | undefined;
export declare const computeDeviceNameDisplay: (device: DeviceRegistryEntry, localize: HomeAssistant["localize"]) => string;
export declare const getDuplicatedDeviceNames: import("memoize-one").MemoizedFn<(devices: HomeAssistant["devices"]) => Set<string>>;
