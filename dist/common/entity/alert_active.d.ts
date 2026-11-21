import type { HassEntity } from "home-assistant-js-websocket";
export declare const ALERT_DOMAINS: string[];
export declare const computeAlertActiveStates: (entityId: string) => string[];
export declare const isAlertActive: (stateObj: HassEntity) => boolean;
export declare const computeAlertColor: (stateObj: HassEntity, color: string) => string | undefined;
