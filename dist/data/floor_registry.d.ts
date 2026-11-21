import type { HomeAssistant } from "../types";
import type { AreaRegistryEntry } from "./area/area_registry";
import type { RegistryEntry } from "./registry";
export { subscribeAreaRegistry } from "./ws-area_registry";
export interface FloorRegistryEntry extends RegistryEntry {
    floor_id: string;
    name: string;
    level: number | null;
    icon: string | null;
    aliases: string[];
}
export type FloorAreaLookup = Record<string, AreaRegistryEntry[]>;
export interface FloorRegistryEntryMutableParams {
    name: string;
    level?: number | null;
    icon?: string | null;
    aliases?: string[];
}
export declare const createFloorRegistryEntry: (callWS: HomeAssistant["callWS"], values: FloorRegistryEntryMutableParams) => Promise<FloorRegistryEntry>;
export declare const updateFloorRegistryEntry: (hass: HomeAssistant, floorId: string, updates: Partial<FloorRegistryEntryMutableParams>) => Promise<FloorRegistryEntry>;
export declare const deleteFloorRegistryEntry: (hass: HomeAssistant, floorId: string) => Promise<unknown>;
export declare const reorderFloorRegistryEntries: (hass: HomeAssistant, floorIds: string[]) => Promise<unknown>;
export declare const getFloorAreaLookup: (areas: AreaRegistryEntry[]) => FloorAreaLookup;
