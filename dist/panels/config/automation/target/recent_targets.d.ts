import { type SingleHassServiceTarget, type TargetType } from "../../../../data/target";
export declare const RECENT_TARGETS_STORAGE_KEY = "automation-recent-targets";
export declare const MAX_RECENT_TARGETS = 4;
/**
 * Parse a stored "<type>________<id>" recent target, rejecting malformed
 * entries and structural buckets like unassigned devices.
 */
export declare const parseRecentTarget: (value: unknown) => [TargetType, string] | undefined;
/**
 * Add a target picked in the add automation element dialog to the recent
 * targets.
 */
export declare const addRecentTarget: (recents: string[] | undefined, target: SingleHassServiceTarget) => string[] | undefined;
