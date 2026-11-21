import type { ReactiveControllerHost } from "lit";
import { ContextController } from "../../common/decorators/consume";
import type { HaEntityPickerEntityFilterFunc } from "../../data/entity/entity";
import { type HassServiceTargetWithExclude, type TargetItem } from "../../data/target";
import type { HomeAssistant } from "../../types";
import type { HaDevicePickerDeviceFilterFunc } from "../device/ha-device-picker";
import { type TargetExclusion, type TargetExclusions } from "./target-exclusions";
export type TargetExclusionsHost = ReactiveControllerHost & HTMLElement & {
    hass: HomeAssistant;
    value?: HassServiceTargetWithExclude;
    allowExclude: boolean;
    primaryEntitiesOnly?: boolean;
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaEntityPickerEntityFilterFunc;
    includeDomains?: string[];
    includeDeviceClasses?: string[];
};
/**
 * What the exclusions of a target picker's value take out of each of its
 * targets, as core resolves them, narrowed to what the picker's rows show.
 */
export declare class TargetExclusionsController extends ContextController {
    /** What each exclusion takes out of each target, worked out from the value. */
    exclusions?: TargetExclusions;
    /**
     * Whether the exclusions belong to the current value, so it is known which
     * ones are shared with another target and the details can edit them.
     */
    complete: boolean;
    private _host;
    private _expandGroup?;
    private _request;
    constructor(host: TargetExclusionsHost);
    protected contextUpdated(): void;
    /** Whether the target expands the groups it names, like an action does. */
    get expandGroup(): boolean;
    /**
     * Works the exclusions out again. Without an exclude, the targets are only
     * needed to tell whether an exclusion made in the details is shared with
     * another target, so they are only resolved for that or when `force`d.
     */
    resolve({ force }?: {
        force?: boolean;
    }): Promise<void>;
    /** The exclusions by the target they affect, once there can be any. */
    get perTarget(): Record<string, TargetExclusion[]> | undefined;
    /** Every entity the targets include, once known for the current value. */
    get includedEntities(): string[] | undefined;
    /**
     * Excludes that aren't listed under a target or as having no effect,
     * because they are still being resolved or resolving them failed.
     */
    get unplaced(): TargetItem[];
    /**
     * What excluding `item` on its own would take out of the target
     * `targetKey`, with the rest of the value as it is, and whether it affects
     * another target too.
     */
    explainExclusion(targetKey: string, item: TargetItem): Promise<TargetExclusion | undefined>;
    private _explain;
    private _update;
    private _keeps;
    private _includedEntities;
    private _unplaced;
}
