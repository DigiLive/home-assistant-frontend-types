import type { HassEntity } from "home-assistant-js-websocket";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "../../data/entity/entity_registry";
import type { HomeAssistantInternationalization, HomeAssistantRegistries } from "../../types";
import { type EntityNameItem, type EntityNameOptions, type EntityNameType } from "./entity_name_config";
export { DEFAULT_ENTITY_NAME, ENTITY_NAME_TYPES } from "./entity_name_config";
export type { EntityNameItem, EntityNameOptions, EntityNameType, } from "./entity_name_config";
export type EntityNameParts = Partial<Record<EntityNameType, string>>;
export interface EntityNamePartsOptions {
    followContext?: boolean;
}
/**
 * Name formatter used before the registry-aware one is installed
 * (see state/connection-mixin and state/state-display-mixin). It honours a
 * configured string or text-only name and falls back to the friendly name for
 * anything that needs entity context, so a configured name is never dropped
 * while the real formatter is still loading.
 */
export declare const computeEntityNameDisplayWithoutContext: (stateObj: HassEntity, name?: string | EntityNameItem | EntityNameItem[], options?: EntityNameOptions) => string;
export declare const computeEntityEntryName: (entry: EntityRegistryDisplayEntry | EntityRegistryEntry) => string | undefined;
export declare const computeEntityEntryNameParts: (entry: EntityRegistryDisplayEntry | EntityRegistryEntry, registries: HomeAssistantRegistries, options?: EntityNamePartsOptions) => EntityNameParts;
export declare const computeEntityNameParts: (stateObj: HassEntity, registries: HomeAssistantRegistries, options?: EntityNamePartsOptions) => EntityNameParts;
export declare const computeDefaultEntityNameItems: (stateObj: HassEntity, registries: HomeAssistantRegistries) => EntityNameItem[];
export declare const computeEntityNameDisplay: (stateObj: HassEntity, name: string | EntityNameItem | EntityNameItem[] | undefined, registries: HomeAssistantRegistries, options?: EntityNameOptions) => string;
export declare const computeEntitySearchLabels: (stateObj: HassEntity, registries: HomeAssistantRegistries) => {
    entityName: string;
    friendlyName: string;
    deviceName: string;
    parentDeviceName: string;
    areaName: string;
};
export interface EntityPickerDisplay {
    primary: string;
    secondary?: string;
}
export interface EntityPickerDisplayOptions extends HomeAssistantRegistries {
    language: HomeAssistantInternationalization["language"];
    translationMetadata: HomeAssistantInternationalization["translationMetadata"];
}
export declare const computeEntityPickerDisplay: (options: EntityPickerDisplayOptions, stateObj: HassEntity) => EntityPickerDisplay;
