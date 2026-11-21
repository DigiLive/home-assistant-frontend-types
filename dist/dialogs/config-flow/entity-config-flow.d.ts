import type { ConfigEntry, SubEntry } from "../../data/config_entries";
import type { HomeAssistant, HomeAssistantApi } from "../../types";
export interface EntityConfigFlow {
    entry: ConfigEntry;
    subEntry?: SubEntry;
}
export declare const fetchEntityConfigFlow: (api: HomeAssistantApi, entities: HomeAssistant["entities"] | undefined, entityId: string) => Promise<EntityConfigFlow | undefined>;
export declare const showEntityConfigFlow: (element: HTMLElement, api: HomeAssistantApi, { entry, subEntry }: EntityConfigFlow) => Promise<void>;
