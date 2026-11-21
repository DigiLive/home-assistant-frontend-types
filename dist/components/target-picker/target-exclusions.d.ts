import type { HassServiceTarget } from "home-assistant-js-websocket";
import { type ExtractFromTargetResultReferenced, type HassServiceTargetWithExclude, type TargetExplanation, type TargetIncludeEntities, type TargetItem, type TargetType } from "../../data/target";
import type { HomeAssistant } from "../../types";
export declare const TARGET_TYPES: readonly TargetType[];
export declare const targetItemKey: ({ type, id }: TargetItem) => string;
/** The items a target lists, without what its `exclude` lists. */
export declare const targetItems: (target?: HassServiceTarget) => TargetItem[];
export declare const hasIncludedTargets: (target?: HassServiceTarget) => boolean;
/** An exclusion as seen from one included target. */
export interface TargetExclusion extends TargetItem {
    /** Entities it takes out of that target. */
    removed: string[];
    /** It also takes entities out of another included target. */
    shared: boolean;
}
export interface TargetExclusions {
    /** Exclusions by the `type:id` of each included target they affect. */
    perTarget: Record<string, TargetExclusion[]>;
    /** Exclusions that take nothing out of any included target. */
    noEffect: TargetItem[];
    /** The entities of each included target, by its `type:id`. */
    included: Record<string, string[]>;
}
/**
 * The entities the picker's filters leave in an included target other than
 * an entity. An entity item is what it is, filters or not.
 */
export type TargetNarrowing = (include: TargetIncludeEntities) => string[];
/**
 * Which exclusions take what out of each included target, from what core
 * explained. Excludes are global, so one exclusion is listed under every
 * target it affects; one that affects none, including one whose item no
 * longer exists, has no effect. `keeps` narrows each target to what is left
 * of it once the picker's filters are applied; what an exclusion takes out
 * of it is narrowed the same way.
 */
export declare const computeExclusionsPerTarget: (explained: TargetExplanation, keeps?: TargetNarrowing) => TargetExclusions;
/**
 * The exclusions that take entities out of one item of a target. Actions
 * expand the groups a target names, triggers and conditions don't, so
 * `expandGroup` follows what the target is used for.
 */
export declare const resolveItemExclusions: (hass: HomeAssistant, item: TargetItem, exclude: HassServiceTarget | undefined, primaryEntitiesOnly?: boolean, expandGroup?: boolean) => Promise<TargetExclusion[]>;
/** `exclude` with `item` added, or unchanged if it is already in there. */
export declare const addToExclude: (exclude: HassServiceTarget | undefined, item: TargetItem) => HassServiceTarget;
/**
 * `exclude` without `item`. Keys left empty are dropped, and so is the whole
 * exclude once nothing is left in it.
 */
export declare const removeFromExclude: (exclude: HassServiceTarget | undefined, item: TargetItem) => HassServiceTarget | undefined;
/**
 * The target with `exclude` set, or without it when there is nothing to
 * exclude. An exclude on its own is not a target, so it is dropped once
 * nothing is included.
 */
export declare const withExclude: (value: HassServiceTargetWithExclude | undefined, exclude: HassServiceTarget | undefined) => HassServiceTargetWithExclude | undefined;
/** A row of the target details, with the rows shown under it. */
export interface TargetRow extends TargetItem {
    entities: string[];
    children: TargetRow[];
}
/**
 * The rows the target details show for an item, built the same way the rows
 * lay themselves out. Rows without entities aren't shown, so they are left
 * out.
 */
export declare const buildTargetRow: (type: TargetType, id: string, entries: ExtractFromTargetResultReferenced | undefined, entityRegistry: HomeAssistant["entities"], devices: HomeAssistant["devices"]) => TargetRow;
export interface TargetRowState {
    checked: boolean;
    indeterminate: boolean;
    /** Everything in the row is out through exclusions it can't undo. */
    disabled: boolean;
    /** When disabled: the exclusions that keep it out. */
    lockedBy: TargetItem[];
}
/**
 * How a row's checkbox shows `exclusions`. A row is only out as a whole when
 * it, or something above it, is excluded. When only what is below it is,
 * even all of it, the row is partly out.
 */
export declare const targetRowState: (row: TargetRow, isTarget: boolean, exclusions: TargetExclusion[]) => TargetRowState;
/**
 * The exclusions after a row's checkbox was changed. Checking a row takes
 * away the exclusions it can undo; what others keep out stays out.
 * Unchecking it excludes the row itself, so an area or device stays
 * excluded as such, including what is added to it later. The target can't
 * be excluded from itself, so unchecking it unchecks its rows instead.
 * `initial` gives back an exclusion that was there before as it was. A new
 * one takes out the row's entities and counts as shared until core tells
 * what it takes out of every target, so a parent row can't take it away
 * before it is known whether it also affects another target.
 */
export declare const toggleTargetRow: ({ row, isTarget, selected, exclusions, initial, }: {
    row: TargetRow;
    isTarget: boolean;
    selected: boolean;
    exclusions: TargetExclusion[];
    initial: TargetExclusion[];
}) => TargetExclusion[];
/**
 * The new `exclude` once the details are applied: what was taken away is
 * removed, what was added is added, and everything else stays as it was.
 */
export declare const applyExclusionChanges: (exclude: HassServiceTarget | undefined, initial: TargetExclusion[], current: TargetExclusion[]) => HassServiceTarget | undefined;
