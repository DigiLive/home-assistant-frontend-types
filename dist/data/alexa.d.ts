import type { HomeAssistant } from "../types";
export interface AlexaEntity {
    entity_id: string;
    display_categories: string[] | null;
    interfaces: string[];
}
export declare const fetchCloudAlexaEntities: (hass: HomeAssistant) => Promise<AlexaEntity[]>;
export declare const fetchCloudAlexaEntity: (hass: HomeAssistant, entity_id: string) => Promise<undefined>;
export declare const syncCloudAlexaEntities: (hass: HomeAssistant) => Promise<unknown>;
