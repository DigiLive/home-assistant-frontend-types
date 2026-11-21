import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
export interface EntityLocation {
    latitude: number;
    longitude: number;
    gpsAccuracy?: number;
}
export declare const findFirstActiveZone: (inZones: readonly string[], states: HassEntities) => HassEntity | undefined;
export declare const getEntityLocation: (stateObj: HassEntity, states: HassEntities) => EntityLocation | undefined;
