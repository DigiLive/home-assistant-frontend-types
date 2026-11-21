import type { HassServiceTarget } from "home-assistant-js-websocket";
import type { HaDevicePickerDeviceFilterFunc } from "../components/device/ha-device-picker";
import type { PickerComboBoxItem } from "../components/ha-picker-combo-box";
import type { CallWS, HomeAssistant } from "../types";
import type { AreaRegistryEntry } from "./area/area_registry";
import type { FloorComboBoxItem } from "./area_floor_picker";
import type { DevicePickerItem } from "./device/device_picker";
import { type DeviceRegistryEntry } from "./device/device_registry";
import type { HaEntityPickerEntityFilterFunc } from "./entity/entity";
import type { EntityComboBoxItem } from "./entity/entity_picker";
import type { EntityRegistryDisplayEntry } from "./entity/entity_registry";
export declare const TARGET_SEPARATOR = "________";
export type TargetType = "entity" | "device" | "area" | "label" | "floor";
export type TargetTypeFloorless = Exclude<TargetType, "floor">;
export interface TargetItem {
    type: TargetType;
    id: string;
}
/**
 * A target that can leave things out again. `exclude` has the shape of a
 * target and is subtracted, as a whole, from everything the target resolves to.
 */
export type HassServiceTargetWithExclude = HassServiceTarget & {
    exclude?: HassServiceTarget;
};
export interface SingleHassServiceTarget {
    entity_id?: string;
    device_id?: string;
    area_id?: string;
    floor_id?: string;
    label_id?: string;
}
export interface ExtractFromTargetResult {
    missing_areas: string[];
    missing_devices: string[];
    missing_floors: string[];
    missing_labels: string[];
    referenced_areas: string[];
    referenced_devices: string[];
    referenced_entities: string[];
}
export interface ExtractFromTargetResultReferenced {
    referenced_areas: string[];
    referenced_devices: string[];
    referenced_entities: string[];
}
export declare const extractFromTarget: (callWS: CallWS, target: HassServiceTarget, expandGroup?: boolean, primaryEntitiesOnly?: boolean) => Promise<ExtractFromTargetResult>;
export interface TargetItemEntities extends TargetItem {
    entities: string[];
}
export interface TargetExcludeEffect extends TargetItem {
    removed: TargetItemEntities[];
}
/**
 * An included item with what it resolves to, and the areas and devices it
 * reaches on the way, so the picker's filters can narrow it like its row.
 */
export interface TargetIncludeEntities extends TargetItemEntities {
    referenced_areas: string[];
    referenced_devices: string[];
}
export interface TargetExplanation {
    includes: TargetIncludeEntities[];
    excludes: TargetExcludeEffect[];
}
export declare const explainTarget: (callWS: CallWS, target: HassServiceTargetWithExclude, expandGroup?: boolean, primaryEntitiesOnly?: boolean) => Promise<TargetExplanation>;
/**
 * What each item of an explained target is left with once every exclude is
 * taken out of it, by its `type:id`.
 */
export declare const targetEntitiesAfterExclude: (explanation: TargetExplanation) => Record<string, string[]>;
export declare const getTargetEntityCount: (target?: HassServiceTarget) => number;
export declare const getTriggersForTarget: (callWS: HomeAssistant["callWS"], target: HassServiceTarget, expandGroup?: boolean) => Promise<string[]>;
export declare const getConditionsForTarget: (callWS: HomeAssistant["callWS"], target: HassServiceTarget, expandGroup?: boolean) => Promise<string[]>;
export declare const getServicesForTarget: (callWS: HomeAssistant["callWS"], target: HassServiceTarget, expandGroup?: boolean) => Promise<string[]>;
export declare const areaMeetsFilter: (area: AreaRegistryEntry, devices: HomeAssistant["devices"], entities: HomeAssistant["entities"], deviceFilter?: HaDevicePickerDeviceFilterFunc, includeDomains?: string[], includeDeviceClasses?: string[], states?: HomeAssistant["states"], entityFilter?: HaEntityPickerEntityFilterFunc, includeSecondary?: boolean) => boolean;
export declare const deviceMeetsFilter: (device: DeviceRegistryEntry, entities: HomeAssistant["entities"], deviceFilter?: HaDevicePickerDeviceFilterFunc, includeDomains?: string[], includeDeviceClasses?: string[], states?: HomeAssistant["states"], entityFilter?: HaEntityPickerEntityFilterFunc, includeSecondary?: boolean) => boolean;
export declare const entityRegMeetsFilter: (entity: EntityRegistryDisplayEntry, includeSecondary?: boolean, includeDomains?: string[], includeDeviceClasses?: string[], states?: HomeAssistant["states"], entityFilter?: HaEntityPickerEntityFilterFunc) => boolean;
export declare const getTargetComboBoxItemType: (item: PickerComboBoxItem | (FloorComboBoxItem & {
    last?: boolean | undefined;
}) | EntityComboBoxItem | DevicePickerItem) => "area" | "device" | "empty" | "entity" | "floor" | "label";
