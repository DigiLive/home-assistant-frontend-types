import type { HassEntity } from "home-assistant-js-websocket";
import { type LitElement } from "lit";
import type { ExtEntityRegistryEntry, FavoriteOption, FavoritesDomain } from "../../data/entity/entity_registry";
import type { HomeAssistant } from "../../types";
export interface FavoritesDialogContext {
    host: LitElement;
    hass: HomeAssistant;
    entry: ExtEntityRegistryEntry;
    stateObj: HassEntity;
}
interface FavoritesDialogLabels {
    editMode: string;
    reset: string;
    resetText: string;
    copy: string;
}
export interface FavoritesDialogHandler {
    domain: FavoritesDomain;
    supports: (stateObj: HassEntity) => boolean;
    hasCustomFavorites: (entry: ExtEntityRegistryEntry) => boolean;
    canCopy?: (entry: ExtEntityRegistryEntry) => boolean;
    getResetOptions: (stateObj: HassEntity) => Partial<Record<FavoriteOption, undefined>>;
    getLabels: (hass: HomeAssistant) => FavoritesDialogLabels;
    copy: (ctx: FavoritesDialogContext) => Promise<void>;
}
export declare const getFavoritesDialogHandler: (stateObj: HassEntity) => FavoritesDialogHandler | undefined;
export {};
