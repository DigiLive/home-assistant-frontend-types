import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../../types";
export declare const computeGroupEntitiesState: (states: HassEntity[]) => string;
export declare const toggleGroupEntities: (hass: Pick<HomeAssistant, "callService">, states: HassEntity[]) => void;
