import type { HomeAssistant, HomeAssistantApi } from "../../types";
import type { DeviceRegistryEntry } from "../device/device_registry";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "../entity/entity_registry";
import type { RegistryEntry } from "../registry";
export { subscribeAreaRegistry } from "../ws-area_registry";
export interface AreaRegistryEntry extends RegistryEntry {
    aliases: string[];
    area_id: string;
    floor_id: string | null;
    humidity_entity_id: string | null;
    icon: string | null;
    labels: string[];
    name: string;
    picture: string | null;
    temperature_entity_id: string | null;
}
export type AreaEntityLookup = Record<string, (EntityRegistryEntry | EntityRegistryDisplayEntry)[]>;
export type AreaDeviceLookup = Record<string, DeviceRegistryEntry[]>;
export interface AreaRegistryEntryMutableParams {
    aliases?: string[];
    floor_id?: string | null;
    humidity_entity_id?: string | null;
    icon?: string | null;
    labels?: string[];
    name: string;
    picture?: string | null;
    temperature_entity_id?: string | null;
}
export declare const createAreaRegistryEntry: (hass: HomeAssistantApi, values: AreaRegistryEntryMutableParams) => Promise<AreaRegistryEntry>;
export declare const updateAreaRegistryEntry: (callWS: HomeAssistant["callWS"], areaId: string, updates: Partial<AreaRegistryEntryMutableParams>) => Promise<AreaRegistryEntry>;
export declare const deleteAreaRegistryEntry: (hass: HomeAssistant, areaId: string) => Promise<unknown>;
export declare const reorderAreaRegistryEntries: (hass: HomeAssistant, areaIds: string[]) => Promise<unknown>;
export declare const getAreaEntityLookup: (entities: (EntityRegistryEntry | EntityRegistryDisplayEntry)[]) => AreaEntityLookup;
export declare const getAreaDeviceLookup: (devices: DeviceRegistryEntry[]) => AreaDeviceLookup;
