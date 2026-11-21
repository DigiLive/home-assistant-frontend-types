import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistantFormatters } from "../types";
import { CoverEntityFeature } from "./feature/cover_entity_feature";
export { CoverEntityFeature };
export declare const DEFAULT_COVER_FAVORITE_POSITIONS: number[];
export declare const coverSupportsPosition: (stateObj: CoverEntity) => boolean;
export declare const coverSupportsTiltPosition: (stateObj: CoverEntity) => boolean;
export declare const coverSupportsAnyPosition: (stateObj: CoverEntity) => boolean;
export declare function isFullyOpen(stateObj: CoverEntity): boolean;
export declare function isFullyClosed(stateObj: CoverEntity): boolean;
export declare function isFullyOpenTilt(stateObj: CoverEntity): boolean;
export declare function isFullyClosedTilt(stateObj: CoverEntity): boolean;
export declare function isOpening(stateObj: CoverEntity): boolean;
export declare function isClosing(stateObj: CoverEntity): boolean;
export declare function isTiltOnly(stateObj: CoverEntity): boolean;
export declare function canOpen(stateObj: CoverEntity): boolean;
export declare function canClose(stateObj: CoverEntity): boolean;
export declare function canStop(stateObj: CoverEntity): boolean;
export declare function canOpenTilt(stateObj: CoverEntity): boolean;
export declare function canCloseTilt(stateObj: CoverEntity): boolean;
export declare function canStopTilt(stateObj: CoverEntity): boolean;
interface CoverEntityAttributes extends HassEntityAttributeBase {
    current_position?: number;
    current_tilt_position?: number;
    supported_speeds?: string[];
}
export interface CoverEntity extends HassEntityBase {
    attributes: CoverEntityAttributes;
}
export declare function computeCoverPositionStateDisplay(stateObj: CoverEntity, formatEntityAttributeValue: HomeAssistantFormatters["formatEntityAttributeValue"], position?: number): string;
