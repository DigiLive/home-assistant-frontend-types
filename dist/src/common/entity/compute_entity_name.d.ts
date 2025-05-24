import type { HassEntity } from "home-assistant-js-websocket";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "../../data/entity_registry";
import type { HomeAssistant } from "../../types";
export declare const computeEntityName: (stateObj: HassEntity, hass: HomeAssistant) => string | undefined;
export declare const computeEntityEntryName: (entry: EntityRegistryDisplayEntry | EntityRegistryEntry, hass: HomeAssistant) => string | undefined;
