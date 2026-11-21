import type { HaEntityPickerEntityFilterFunc } from "../../data/entity/entity";
import { type ExtractFromTargetResultReferenced, type TargetItem } from "../../data/target";
import type { HomeAssistant, HomeAssistantRegistries } from "../../types";
import type { HaDevicePickerDeviceFilterFunc } from "../device/ha-device-picker";
export interface TargetEntriesFilters {
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaEntityPickerEntityFilterFunc;
    includeDomains?: string[];
    includeDeviceClasses?: string[];
    primaryEntitiesOnly?: boolean;
}
/**
 * What a target item resolved to, narrowed to what passes the filters. Used
 * by the target rows and by the exclusions, so what an exclusion takes out
 * matches what a row counts.
 */
export declare const filterTargetEntries: <T extends ExtractFromTargetResultReferenced>(states: HomeAssistant["states"], entities: HomeAssistantRegistries["entities"], devices: HomeAssistantRegistries["devices"], areas: HomeAssistantRegistries["areas"], item: TargetItem, entries: T, filters: TargetEntriesFilters) => T;
