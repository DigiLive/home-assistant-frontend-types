import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import type { LovelaceCardFeatureContext } from "../panels/lovelace/card-features/types";
import type { LovelaceBadgeConfig } from "./lovelace/config/badge";
import type { LovelaceCardConfig } from "./lovelace/config/card";
export interface CustomCardSuggestion<T extends LovelaceCardConfig = LovelaceCardConfig> {
    label?: string;
    config: T;
}
export interface CustomBadgeSuggestion<T extends LovelaceBadgeConfig = LovelaceBadgeConfig> {
    label?: string;
    config: T;
}
export interface CustomCardEntry {
    type: string;
    name?: string;
    description?: string;
    preview?: boolean;
    documentationURL?: string;
    getEntitySuggestion?: (hass: HomeAssistant, entityId: string) => CustomCardSuggestion | CustomCardSuggestion[] | null;
}
export interface CustomBadgeEntry {
    type: string;
    name?: string;
    description?: string;
    preview?: boolean;
    documentationURL?: string;
    getEntitySuggestion?: (hass: HomeAssistant, entityId: string) => CustomBadgeSuggestion | CustomBadgeSuggestion[] | null;
}
export interface CustomCardFeatureEntry {
    type: string;
    name?: string;
    /** @deprecated Use `isSupported` */
    supported?: (stateObj: HassEntity) => boolean;
    isSupported?: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
    configurable?: boolean;
}
export interface CustomCardsWindow {
    customCards?: CustomCardEntry[];
    customCardFeatures?: CustomCardFeatureEntry[];
    customBadges?: CustomBadgeEntry[];
    /**
     * @deprecated Use customCardFeatures
     */
    customTileFeatures?: CustomCardFeatureEntry[];
}
export declare const CUSTOM_TYPE_PREFIX = "custom:";
export declare const customCards: CustomCardEntry[];
export declare const getCustomCardFeatures: () => CustomCardFeatureEntry[];
export declare const customBadges: CustomBadgeEntry[];
export declare const getCustomCardEntry: (type: string) => CustomCardEntry;
export declare const getCustomBadgeEntry: (type: string) => CustomBadgeEntry;
export declare const isCustomType: (type: string) => boolean;
export declare const stripCustomPrefix: (type: string) => string;
