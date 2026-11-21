import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../../types";
interface EntityUnitStubConfig {
    entity: string;
    attribute?: string;
    unit?: string;
}
/**
 * Computes the display unit for an entity.
 *
 * @param hass - Home Assistant instance
 * @param stateObj - Entity state object
 * @param config - Element configuration
 * @returns Computed entity unit
 */
export declare const computeEntityUnitDisplay: (hass: HomeAssistant, stateObj: HassEntity | undefined, config: EntityUnitStubConfig) => string;
export {};
