import type { LocalizeFunc } from "../../common/translations/localize";
import type { HaDevicePickerDeviceFilterFunc } from "../../components/device/ha-device-picker";
import type { PickerComboBoxItem } from "../../components/ha-picker-combo-box";
import type { FuseWeightedKey } from "../../resources/fuseMultiTerm";
import type { HomeAssistant } from "../../types";
import type { ConfigEntry } from "../config_entries";
import type { HaEntityPickerEntityFilterFunc } from "../entity/entity";
import { type DeviceRegistryEntry } from "./device_registry";
export interface DevicePickerItem extends PickerComboBoxItem {
    domain?: string;
    domain_name?: string;
    is_child?: boolean;
    last?: boolean;
}
export interface DeviceAreaLabel {
    areaName?: string;
    viaDeviceName?: string;
    viaDeviceAreaName?: string;
    parentDeviceName?: string;
}
export interface GetDevicesOptions {
    states: HomeAssistant["states"];
    areas: HomeAssistant["areas"];
    devices: HomeAssistant["devices"];
    entities: HomeAssistant["entities"];
    localize: LocalizeFunc;
    language: string;
    translationMetadata: HomeAssistant["translationMetadata"];
    configEntryLookup: Record<string, ConfigEntry>;
    includeDomains?: string[];
    excludeDomains?: string[];
    includeDeviceClasses?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaEntityPickerEntityFilterFunc;
    excludeDevices?: string[];
    value?: string;
    idPrefix?: string;
    nested?: boolean;
}
export declare const computeDeviceAreaLabel: (device: DeviceRegistryEntry, areas: HomeAssistant["areas"], devices: HomeAssistant["devices"], localize: LocalizeFunc, language: HomeAssistant["language"], translationMetadata: HomeAssistant["translationMetadata"]) => DeviceAreaLabel;
export declare const deviceComboBoxKeys: FuseWeightedKey[];
export declare const getDevices: (options: GetDevicesOptions) => DevicePickerItem[];
