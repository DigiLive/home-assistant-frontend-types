import type { HassEntities } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../../types";
interface EntitySource {
    domain: string;
}
export type EntitySources = Record<string, EntitySource>;
export declare const fetchEntitySourcesWithCache: (callWS: HomeAssistant["callWS"], states: HassEntities) => Promise<EntitySources>;
export {};
