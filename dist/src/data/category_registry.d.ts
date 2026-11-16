import type { Connection } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import type { RegistryEntry } from "./registry";
export interface CategoryRegistryEntry extends RegistryEntry {
    category_id: string;
    name: string;
    icon: string | null;
}
export interface CategoryRegistryEntryMutableParams {
    name: string;
    icon?: string | null;
}
export declare const fetchCategoryRegistry: (conn: Connection, scope: string) => Promise<CategoryRegistryEntry[]>;
export declare const subscribeCategoryRegistry: (conn: Connection, scope: string, onChange: (floors: CategoryRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
export declare const createCategoryRegistryEntry: (callWS: HomeAssistant["callWS"], scope: string, values: CategoryRegistryEntryMutableParams) => Promise<CategoryRegistryEntry>;
export declare const updateCategoryRegistryEntry: (callWS: HomeAssistant["callWS"], scope: string, category_id: string, updates: Partial<CategoryRegistryEntryMutableParams>) => Promise<CategoryRegistryEntry>;
export declare const deleteCategoryRegistryEntry: (callWS: HomeAssistant["callWS"], scope: string, category_id: string) => Promise<unknown>;
