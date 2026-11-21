import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
export type LawnMowerEntityState = "paused" | "mowing" | "returning" | "docked" | "idle" | "error";
export declare enum LawnMowerEntityFeature {
    START_MOWING = 1,
    PAUSE = 2,
    DOCK = 4,
    STOP = 8
}
interface LawnMowerEntityAttributes extends HassEntityAttributeBase, Record<string, any> {
}
export interface LawnMowerEntity extends HassEntityBase {
    attributes: LawnMowerEntityAttributes;
}
export declare function isMowing(stateObj: LawnMowerEntity): boolean;
export declare function canStartMowing(stateObj: LawnMowerEntity): boolean;
export declare function canPause(stateObj: LawnMowerEntity): boolean;
export declare function canStop(stateObj: LawnMowerEntity): boolean;
export declare function canDock(stateObj: LawnMowerEntity): boolean;
export {};
