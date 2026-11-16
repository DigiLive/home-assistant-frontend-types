import type { HassEntity } from "home-assistant-js-websocket";
interface ConsumeEntryConfig {
    entityIdPath: readonly string[];
}
/** Reuse `previous` when every entry still references the same `HassEntity`. */
export declare const preserveUnchangedEntityStatesRecord: <T extends Record<string, HassEntity | undefined>>(previous: T | undefined, next: T) => T;
/**
 * Consumes `statesContext` and narrows it to the `HassEntity` for the entity
 * ID found at `entityIdPath` on the host (e.g. `["_config", "entity"]`).
 *
 * The first path segment is watched on the host — changes to it re-run the
 * lookup. Deeper segments are traversed at lookup time and short-circuit on
 * nullish values.
 */
export declare const consumeEntityState: (config: ConsumeEntryConfig) => (proto: any, propertyKey: string) => void;
/**
 * Like {@link consumeEntityState} but for one or more entity IDs at
 * `entityIdPath` (a string or string array; wrapped with {@link ensureArray}).
 * Resolves to a record keyed by entity ID containing the currently-available
 * entities (missing entities and non-string IDs are filtered out). Returns the
 * previous record when none of the selected entities changed.
 */
export declare const consumeEntityStates: (config: ConsumeEntryConfig) => (proto: unknown, propertyKey: string) => void;
/**
 * Consumes `entitiesContext` and narrows it to the
 * `EntityRegistryDisplayEntry` for the entity ID found at `entityIdPath` on
 * the host. See {@link consumeEntityState} for semantics.
 */
export declare const consumeEntityRegistryEntry: (config: ConsumeEntryConfig) => (proto: any, propertyKey: string) => void;
/**
 * Consumes `internationalizationContext` and narrows it to the `localize`
 * function. No host watching is needed — the decorated property updates
 * whenever `localize` changes.
 */
export declare const consumeLocalize: () => (proto: any, propertyKey: string) => void;
export {};
