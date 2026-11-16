import type { HomeAssistant } from "../../types";
import type { ConfigEntry } from "../config_entries";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "../entity/entity_registry";
import type { NextNamePart, RegistryEntry } from "../registry";
export { fetchDeviceRegistry, subscribeDeviceRegistry, } from "../ws-device_registry";
export type DeviceDisabler = "user" | "integration" | "config_entry" | "device";
export interface DeviceRegistryEntry extends RegistryEntry {
    id: string;
    config_entries: string[];
    config_entries_subentries: Record<string, (string | null)[]>;
    connections: [string, string][];
    identifiers: [string, string][];
    manufacturer: string | null;
    model: string | null;
    model_id: string | null;
    name: string | null;
    labels: string[];
    sw_version: string | null;
    hw_version: string | null;
    serial_number: string | null;
    via_device_id: string | null;
    area_id: string | null;
    name_by_user: string | null;
    entry_type: "service" | null;
    disabled_by: DeviceDisabler | null;
    configuration_url: string | null;
    primary_config_entry: string | null;
    parent_device_id: string | null;
    next_name_part?: NextNamePart | null;
}
/**
 * A child device as it arrives over the wire from
 * `config/device_registry/list`. A child is a lightweight logical part of a
 * parent device (e.g. an outlet of a power strip); it only carries its own
 * fields and inherits the rest from its parent. It is never stored in
 * `hass.devices` in this shape — {@link resolveChildDevices} turns every child
 * into a complete {@link DeviceRegistryEntry} at ingestion, so downstream code
 * only ever sees full device entries.
 */
export interface ChildDeviceRegistryEntry extends RegistryEntry {
    id: string;
    config_entry_id: string;
    config_subentry_id: string | null;
    identifiers: [string, string][];
    name: string | null;
    name_by_user: string | null;
    labels: string[];
    area_id: string | null;
    disabled_by: DeviceDisabler | null;
    parent_device_id: string;
    next_name_part?: NextNamePart | null;
}
/**
 * The raw, mixed list returned by `config/device_registry/list`: full devices
 * and stripped children, discriminated by the presence of full-device fields.
 */
export type DeviceRegistryListEntry = DeviceRegistryEntry | ChildDeviceRegistryEntry;
/** Whether a resolved device entry is a child (logical part) of another device. */
export declare const isChildDevice: (device: DeviceRegistryEntry) => boolean;
/**
 * Devices whose effective area is the given area: devices with that area, and
 * child devices that inherit it because they have no area of their own. Mirrors
 * core's dr.async_entries_for_area, so a child device with a different explicit
 * area is not part of its parent's area.
 */
export declare const devicesInEffectiveArea: (devices: Record<string, DeviceRegistryEntry>, areaId: string) => DeviceRegistryEntry[];
export interface DeviceRowItem {
    device: DeviceRegistryEntry;
    isChild: boolean;
    isLastChild: boolean;
}
/**
 * Order a flat device list so each child directly follows its parent, flagging
 * children for indented rendering. The incoming order of the top-level devices
 * (and of the children within each parent) is preserved. A child whose parent
 * is not in the list is treated as a top-level device.
 */
export declare const groupDevicesByParent: (devices: DeviceRegistryEntry[]) => DeviceRowItem[];
export type DeviceEntityDisplayLookup = Record<string, EntityRegistryDisplayEntry[]>;
export type DeviceEntityLookup<T extends EntityRegistryEntry | EntityRegistryDisplayEntry = EntityRegistryEntry | EntityRegistryDisplayEntry> = Record<string, T[]>;
export interface DeviceRegistryEntryMutableParams {
    area_id?: string | null;
    name_by_user?: string | null;
    disabled_by?: string | null;
    labels?: string[];
}
/**
 * Describes how a legacy composite device (that lived on multiple config
 * entries) was split into separate devices. The composite device no longer
 * exists in the registry; references to it (in automations, targets, ...) now
 * need to point at one or more of the split devices instead.
 */
export interface DeviceCompositeSplit {
    /** Ids of the devices that replaced the composite device. */
    split_ids: string[];
    /** The split device that took over the composite's primary config entry. */
    primary_id: string | null;
}
/** Map of removed composite device id -> its split information. */
export type DeviceCompositeSplits = Record<string, DeviceCompositeSplit>;
export declare const fetchDeviceCompositeSplits: (connection: HomeAssistant["connection"], callWS: HomeAssistant["callWS"]) => Promise<DeviceCompositeSplits>;
/**
 * Fetch the devices that are linked to the given device because they share at
 * least one connection or identifier. These are separate devices (one per
 * config entry) that represent the same physical hardware, managed by
 * different integrations.
 */
export declare const fetchLinkedDevices: (hass: Pick<HomeAssistant, "callWS">, deviceId: string) => Promise<string[]>;
export declare const devicesInArea: (devices: DeviceRegistryEntry[], areaId: string) => DeviceRegistryEntry[];
export declare const updateDeviceRegistryEntry: (hass: HomeAssistant, deviceId: string, updates: Partial<DeviceRegistryEntryMutableParams>) => Promise<DeviceRegistryEntry>;
export declare const removeDeviceFromRegistry: (hass: HomeAssistant, deviceId: string) => Promise<null>;
export declare const sortDeviceRegistryByName: (entries: DeviceRegistryEntry[], language: string) => DeviceRegistryEntry[];
export declare const getDeviceEntityLookup: (entities: (EntityRegistryEntry | EntityRegistryDisplayEntry)[]) => DeviceEntityLookup;
export declare const getDeviceEntityDisplayLookup: (entities: EntityRegistryDisplayEntry[]) => DeviceEntityDisplayLookup;
export declare const getDeviceIntegrationLookup: (entities: EntityRegistryDisplayEntry[] | EntityRegistryEntry[], devices?: DeviceRegistryEntry[], configEntries?: ConfigEntry[]) => Record<string, Set<string>>;
