import type { HomeAssistant } from "../types";
export interface RelatedResult {
    area?: string[];
    automation?: string[];
    automation_blueprint?: string[];
    config_entry?: string[];
    device?: string[];
    entity?: string[];
    floor?: string[];
    group?: string[];
    integration?: string[];
    label?: string[];
    person?: string[];
    scene?: string[];
    script?: string[];
    script_blueprint?: string[];
}
export declare const SearchableDomains: Set<string>;
export type ItemType = "area" | "automation" | "config_entry" | "device" | "entity" | "floor" | "group" | "integration" | "label" | "person" | "scene" | "script" | "automation_blueprint" | "script_blueprint";
export declare const findRelated: (hass: Pick<HomeAssistant, "callWS">, itemType: ItemType, itemId: string, includeDisabledEntities?: boolean) => Promise<RelatedResult>;
