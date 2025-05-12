import type { AreaRegistryEntry } from "../../../../../data/area_registry";
import type { LovelaceCardConfig } from "../../../../../data/lovelace/config/card";
import type { HomeAssistant } from "../../../../../types";
export declare const AREA_STRATEGY_GROUPS: readonly ["lights", "climate", "covers", "media_players", "security", "others"];
export declare const AREA_STRATEGY_GROUP_ICONS: {
    lights: string;
    climate: string;
    covers: string;
    media_players: string;
    security: string;
    others: string;
};
export type AreaStrategyGroup = (typeof AREA_STRATEGY_GROUPS)[number];
type AreaEntitiesByGroup = Record<AreaStrategyGroup, string[]>;
interface DisplayOptions {
    hidden?: string[];
    order?: string[];
}
type AreaGroupsDisplayOptions = Record<string, DisplayOptions>;
export declare const getAreaGroupedEntities: (area: string, hass: HomeAssistant, displayOptions?: AreaGroupsDisplayOptions) => AreaEntitiesByGroup;
export declare const computeAreaTileCardConfig: (hass: HomeAssistant, prefix: string, includeFeature?: boolean) => (entity: string) => LovelaceCardConfig;
export declare const getAreas: (entries: HomeAssistant["areas"], hiddenAreas?: string[], areasOrder?: string[]) => AreaRegistryEntry[];
export declare const computeAreaPath: (areaId: string) => string;
export {};
