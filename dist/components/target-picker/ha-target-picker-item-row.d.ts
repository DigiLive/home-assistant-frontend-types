import { LitElement, nothing, type PropertyValues, type TemplateResult } from "lit";
import type { DeviceCompositeSplits } from "../../data/device/device_registry";
import type { HaEntityPickerEntityFilterFunc } from "../../data/entity/entity";
import type { LabelRegistryEntry } from "../../data/label/label_registry";
import { type ExtractFromTargetResultReferenced, type TargetType } from "../../data/target";
import type { HaDevicePickerDeviceFilterFunc } from "../device/ha-device-picker";
import "../entity/state-badge";
import "../ha-button";
import "../ha-checkbox";
import "../ha-icon-button";
import "../ha-icon-next";
import "../ha-label";
import "../ha-state-icon";
import "../ha-svg-icon";
import "../item/ha-list-item-base";
import "../item/ha-list-item-button";
import { type TargetExclusion, type TargetRow } from "./target-exclusions";
export declare class HaTargetPickerItemRow extends LitElement {
    type: TargetType;
    itemId: string;
    expand: boolean;
    subEntry: boolean;
    subLevel: number;
    hideContext: boolean;
    parentEntries?: ExtractFromTargetResultReferenced;
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaEntityPickerEntityFilterFunc;
    /**
     * Entities that pass the filters the page currently has on. Narrows the
     * count, and the target details, but not what the target resolves to.
     */
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
    /**
     * Render this row as an exclusion: muted, with a minus in front and a
     * button to remove it, instead of as something the target includes.
     */
    exclusion: boolean;
    /** On an exclusion row: how many entities it takes out of the row above. */
    removedCount?: number;
    /**
     * On a target row: the exclusions that take entities out of it. In the
     * target details, every row gets the target's exclusions, as they are
     * being edited.
     */
    exclusions?: TargetExclusion[];
    /** In the target details: rows get a checkbox to exclude what they hold. */
    selectable: boolean;
    private _iconImg?;
    private _domainName?;
    private _entries?;
    /** Metadata of an external statistic picked as entity, which has no state. */
    private _statistic?;
    private _fetchedEntries?;
    private _lastFetch;
    _labelRegistry?: LabelRegistryEntry[];
    private _states;
    private _registries;
    private _i18n;
    private _formatEntityState;
    private _api;
    private _ui?;
    private _config?;
    private _loadedConfigEntryId?;
    protected willUpdate(changedProps: PropertyValues): void;
    private _updateDomain;
    private _targetRow;
    protected render(): typeof nothing | TemplateResult<1>;
    private _isOut;
    private _excludedBy;
    private _renderExcludedBy;
    private _entitiesLabel;
    private _renderIcon;
    private _renderExclusion;
    private _renderEntries;
    private _renderEmptyEntries;
    private _filterEntries;
    private _updateItemData;
    private _itemData;
    private _setDomainName;
    private _removeItem;
    private _removeExclusion;
    private _selectionChanged;
    private _getDeviceDomain;
    private _replaceItem;
    private _getReplacement;
    private _migrate;
    private _openDetails;
    private _openMoreInfo;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-target-picker-item-row": HaTargetPickerItemRow;
    }
    interface HASSDomEvents {
        "open-target-details": {
            type: TargetType;
            id: string;
            title: string;
        };
        "target-selection-changed": {
            row: TargetRow;
            isTarget: boolean;
            selected: boolean;
        };
    }
}
