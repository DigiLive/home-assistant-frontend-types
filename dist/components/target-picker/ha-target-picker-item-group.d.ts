import { LitElement } from "lit";
import type { DeviceCompositeSplits } from "../../data/device/device_registry";
import type { HaEntityPickerEntityFilterFunc } from "../../data/entity/entity";
import type { TargetType, TargetTypeFloorless } from "../../data/target";
import type { HaDevicePickerDeviceFilterFunc } from "../device/ha-device-picker";
import "../ha-expansion-panel";
import "../list/ha-list-base";
import "./ha-target-picker-item-row";
import { type TargetExclusion } from "./target-exclusions";
export declare class HaTargetPickerItemGroup extends LitElement {
    private _localize;
    type: TargetTypeFloorless;
    items: Partial<Record<TargetType, string[]>>;
    collapsed: boolean;
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaEntityPickerEntityFilterFunc;
    activeFilter?: (entityId: string) => boolean;
    /**
     * Show only targets with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show only targets with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    primaryEntitiesOnly?: boolean;
    compositeSplits?: DeviceCompositeSplits;
    exclusions?: Record<string, TargetExclusion[]>;
    protected render(): import("lit-html").TemplateResult<1>;
    private _expandedChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-target-picker-item-group": HaTargetPickerItemGroup;
    }
}
