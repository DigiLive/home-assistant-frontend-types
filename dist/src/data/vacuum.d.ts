import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export type VacuumEntityState = "on" | "off" | "cleaning" | "docked" | "idle" | "paused" | "returning" | "error";
export declare enum VacuumEntityFeature {
    TURN_ON = 1,
    TURN_OFF = 2,
    PAUSE = 4,
    STOP = 8,
    RETURN_HOME = 16,
    FAN_SPEED = 32,
    STATUS = 128,
    SEND_COMMAND = 256,
    LOCATE = 512,
    CLEAN_SPOT = 1024,
    MAP = 2048,
    STATE = 4096,
    START = 8192,
    CLEAN_AREA = 16384
}
interface VacuumEntityAttributes extends HassEntityAttributeBase {
    fan_speed?: string;
    fan_speed_list?: string[];
    [key: string]: any;
}
export interface VacuumEntity extends HassEntityBase {
    attributes: VacuumEntityAttributes;
}
export declare function isCleaning(stateObj: VacuumEntity): boolean;
export declare function canStart(stateObj: VacuumEntity): boolean;
export declare function canStop(stateObj: VacuumEntity): boolean;
export declare function canReturnHome(stateObj: VacuumEntity): boolean;
export interface Segment {
    id: string;
    name: string;
    group: string | null;
}
export declare const getVacuumSegments: (callWS: HomeAssistant["callWS"], entity_id: string) => Promise<{
    segments: Segment[];
}>;
export {};
