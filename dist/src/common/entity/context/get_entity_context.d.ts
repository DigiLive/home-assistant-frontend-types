import type { HassEntity } from "home-assistant-js-websocket";
import type { AreaRegistryEntry } from "../../../data/area_registry";
import type { DeviceRegistryEntry } from "../../../data/device_registry";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry, ExtEntityRegistryEntry } from "../../../data/entity_registry";
import type { FloorRegistryEntry } from "../../../data/floor_registry";
import type { HomeAssistant } from "../../../types";
interface EntityContext {
    entity: EntityRegistryDisplayEntry | null;
    device: DeviceRegistryEntry | null;
    area: AreaRegistryEntry | null;
    floor: FloorRegistryEntry | null;
}
export declare const getEntityContext: (stateObj: HassEntity, hass: HomeAssistant) => EntityContext;
export declare const getEntityEntryContext: (entry: EntityRegistryDisplayEntry | EntityRegistryEntry | ExtEntityRegistryEntry, hass: HomeAssistant) => EntityContext;
export {};
