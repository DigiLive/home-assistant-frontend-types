import type { HomeAssistantApi } from "../../types";
import type { EntityIdFormat } from "../entity_id_format";
export interface EntityRegistrySettings {
    entity_id_parts: EntityIdFormat | null;
}
export declare const fetchEntityRegistrySettings: (api: HomeAssistantApi) => Promise<EntityRegistrySettings>;
export declare const updateEntityRegistrySettings: (api: HomeAssistantApi, updates: Partial<EntityRegistrySettings>) => Promise<EntityRegistrySettings>;
