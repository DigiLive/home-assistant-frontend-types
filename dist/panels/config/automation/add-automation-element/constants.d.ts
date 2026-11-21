import type { AutomationElementGroup, AutomationElementGroupCollection } from "../../../../data/automation";
import type { AddElementType } from "./types";
export declare const ELEMENT_TYPES: Record<AddElementType, {
    collections: AutomationElementGroupCollection[];
    icons: Record<string, string>;
}>;
export declare const BUILDING_BLOCKS: Record<AddElementType, AutomationElementGroup>;
export declare const ENTITY_DOMAINS_OTHER: Set<string>;
export declare const ENTITY_DOMAINS_MAIN: Set<string>;
export declare const DYNAMIC_KEYWORDS: string[];
export declare const MAX_RECENT_ELEMENTS = 4;
export declare const RECENT_ELEMENTS_STORAGE_KEY = "automation-recent-elements";
export declare const TIME_LOCATION_GROUPS: string[];
export declare const NUMERIC_DOMAINS: string[];
