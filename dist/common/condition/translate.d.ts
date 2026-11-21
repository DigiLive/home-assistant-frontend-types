import type { Condition as CoreCondition } from "../../data/automation";
import type { VisibilityCondition, VisibilityLogicalCondition } from "../../panels/lovelace/common/validate-condition";
/** `and` / `or` / `not`. */
export declare const isLogicalCondition: (condition: VisibilityCondition) => condition is VisibilityLogicalCondition;
/** Children of a logical condition. Core allows a single item or a list. */
export declare const logicalChildren: (condition: VisibilityLogicalCondition) => VisibilityCondition[];
/** True if `value` looks like an entity id, not a numeric literal. */
export declare const isEntityReference: (value: unknown) => value is string;
/**
 * True if this node should go to `subscribe_condition`.
 * A mixed `and`/`or`/`not` is client-side so it can wrap server subtrees.
 * Lovelace `state`/`numeric_state` with {@link hasLegacyOnlySemantics} stay local.
 */
export declare const isServerCondition: (condition: VisibilityCondition) => boolean;
/** `enabled: false`. Core skips these inside `and` / `or` / `not`. */
export declare const isDisabledCondition: (condition: VisibilityCondition) => boolean;
/** Inverse of {@link isServerCondition}. True if any leaf is client-side. */
export declare const isClientCondition: (condition: VisibilityCondition) => boolean;
/** True if every leaf is client-only (no `subscribe_condition` needed). */
export declare const isPureClientCondition: (condition: VisibilityCondition) => boolean;
/**
 * Lovelace → core automation condition. Already-core types pass through.
 * Client-only conditions should not be passed in.
 */
export declare const translateToCoreCondition: (condition: VisibilityCondition) => CoreCondition;
