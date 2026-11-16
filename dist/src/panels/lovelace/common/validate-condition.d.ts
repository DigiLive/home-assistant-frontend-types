import { type WeekdayShort } from "../../../common/datetime/weekday";
import type { NumericStateCondition as CoreNumericStateCondition, PlatformCondition as CorePlatformCondition, StateCondition as CoreStateCondition, SunCondition, TemplateCondition, ZoneCondition } from "../../../data/automation";
import type { DeviceCondition } from "../../../data/device/device_automation";
import type { HassServiceTargetWithExclude } from "../../../data/target";
import type { HomeAssistant } from "../../../types";
export type Condition = ViewColumnsCondition | LocationCondition | NumericStateCondition | StateCondition | ScreenCondition | TimeCondition | UserCondition | OrCondition | AndCondition | NotCondition;
export interface LegacyCondition {
    entity?: string;
    state?: string | string[];
    state_not?: string | string[];
}
interface BaseCondition {
    condition: string;
}
export interface ConditionContext {
    max_columns?: number;
    entity_id?: string;
}
export interface ViewColumnsCondition extends BaseCondition {
    condition: "view_columns";
    min?: number;
    max?: number;
}
export declare const LOCATION_MATCH_MODES: readonly ["any_zone", "active_zone"];
export type LocationMatchMode = (typeof LOCATION_MATCH_MODES)[number];
export interface LocationCondition extends BaseCondition {
    condition: "location";
    /** Legacy: matches the person state (active zone name). */
    locations?: string[];
    /** Zones selected directly or through a label, area or floor. */
    target?: HassServiceTargetWithExclude;
    /**
     * `any_zone` (default) matches the zones in the person `in_zones`.
     * `active_zone` matches only the zone shown as the person state, like
     * `locations`, so passive zones never match. Both match the state when
     * `in_zones` is empty, as it is for legacy device trackers.
     */
    match_mode?: LocationMatchMode;
    /** Matches the person state `not_home`, which passive zones don't change. */
    away?: boolean;
}
export interface NumericStateCondition extends BaseCondition {
    condition: "numeric_state";
    entity?: string;
    attribute?: string;
    below?: string | number;
    above?: string | number;
}
export interface StateCondition extends BaseCondition {
    condition: "state";
    entity?: string;
    attribute?: string;
    state?: string | string[];
    state_not?: string | string[];
}
export interface ScreenCondition extends BaseCondition {
    condition: "screen";
    media_query?: string;
}
export interface TimeCondition extends BaseCondition {
    condition: "time";
    after?: string;
    before?: string;
    weekdays?: WeekdayShort[];
}
export interface UserCondition extends BaseCondition {
    condition: "user";
    users?: string[];
}
export interface OrCondition extends BaseCondition {
    condition: "or";
    conditions?: Condition[];
}
export interface AndCondition extends BaseCondition {
    condition: "and";
    conditions?: Condition[];
}
export interface NotCondition extends BaseCondition {
    condition: "not";
    conditions?: Condition[];
}
/**
 * Dashboard visibility: client-only lovelace types (`screen`, `user`,
 * `view_columns`, `location`, `time`) plus core automation conditions.
 * Lovelace `state`/`numeric_state` (`entity`) and core (`entity_id`) both
 * exist; existing dashboards keep the old shape until edited.
 * See `common/condition/translate.ts`.
 */
export type VisibilityCondition = ScreenCondition | UserCondition | ViewColumnsCondition | LocationCondition | TimeCondition | StateCondition | NumericStateCondition | LegacyCondition | CoreVisibilityCondition | VisibilityLogicalCondition;
/**
 * Core conditions used for dashboard visibility. Omits client `time` and
 * `trigger`. `PlatformCondition` also covers core `state` / `numeric_state`.
 */
export type CoreVisibilityCondition = CoreStateCondition | CoreNumericStateCondition | SunCondition | ZoneCondition | TemplateCondition | DeviceCondition | CorePlatformCondition;
/**
 * Mixed `and` / `or` / `not`. `conditions` may be one item or a list.
 */
export interface VisibilityLogicalCondition extends BaseCondition {
    condition: "and" | "or" | "not";
    conditions?: VisibilityCondition | VisibilityCondition[];
}
/** The parts of `hass` the condition checks read. */
export type ConditionHass = Pick<HomeAssistant, "states" | "user" | "locale" | "config" | "entities" | "devices" | "areas">;
/**
 * Zone entity IDs selected directly or through a label, area or floor, that
 * currently have a state.
 */
export declare function resolveLocationZones(hass: ConditionHass, target: HassServiceTargetWithExclude): string[];
/**
 * Return the result of applying conditions
 * @param conditions conditions to apply
 * @param hass Home Assistant object
 * @param context optional context for conditions that need runtime information
 * @returns true if conditions are respected
 */
export declare function checkConditionsMet(conditions: (Condition | LegacyCondition)[], hass: ConditionHass, context: ConditionContext): boolean;
/**
 * Collects every entity ID the conditions read, so a card can track only
 * those states. Accepts a single condition because logical groups may hold
 * one child instead of a list.
 */
export declare function extractConditionEntityIds(conditions: (Condition | LegacyCondition)[] | Condition | LegacyCondition | undefined): Set<string>;
/**
 * Validate the conditions config for the UI
 * @param conditions conditions to apply
 * @returns true if conditions are validated
 */
export declare function validateConditionalConfig(conditions: VisibilityCondition[]): boolean;
/**
 * Build a condition for filters
 * @param condition condition to apply
 * @param entityId base the condition on that entity
 * @returns a new condition with entity id
 */
export declare function addEntityToCondition<T extends VisibilityCondition>(condition: T, entityId: string): T;
export {};
