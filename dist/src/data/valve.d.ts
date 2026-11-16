import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistantFormatters } from "../types";
export declare enum ValveEntityFeature {
    OPEN = 1,
    CLOSE = 2,
    SET_POSITION = 4,
    STOP = 8
}
export declare const DEFAULT_VALVE_FAVORITE_POSITIONS: number[];
export declare const valveSupportsPosition: (stateObj: ValveEntity) => boolean;
export declare function isFullyOpen(stateObj: ValveEntity): boolean;
export declare function isFullyClosed(stateObj: ValveEntity): boolean;
export declare function isOpening(stateObj: ValveEntity): boolean;
export declare function isClosing(stateObj: ValveEntity): boolean;
export declare function canOpen(stateObj: ValveEntity): boolean;
export declare function canClose(stateObj: ValveEntity): boolean;
export declare function canStop(stateObj: ValveEntity): boolean;
interface ValveEntityAttributes extends HassEntityAttributeBase {
    current_position?: number | null;
}
export interface ValveEntity extends HassEntityBase {
    attributes: ValveEntityAttributes;
}
export declare function computeValvePositionStateDisplay(stateObj: ValveEntity, formatEntityAttributeValue: HomeAssistantFormatters["formatEntityAttributeValue"], position?: number): string;
export {};
