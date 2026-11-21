import { LitElement, type PropertyValues } from "lit";
import "../../../../components/chips/ha-chip-set";
import "../../../../components/chips/ha-filter-chip";
import "../../../../components/entity/state-badge";
import "../../../../components/ha-combo-box-item";
import "../../../../components/ha-domain-icon";
import "../../../../components/ha-floor-icon";
import "../../../../components/ha-icon-next";
import type { PickerComboBoxItem } from "../../../../components/ha-picker-combo-box";
import "../../../../components/ha-section-title";
import "../../../../components/ha-tree-indicator";
import "../../../../components/item/ha-list-item-button";
import "../../../../components/list/ha-list-virtualized";
import { type FloorComboBoxItem } from "../../../../data/area_floor_picker";
import { type EntityComboBoxItem } from "../../../../data/entity/entity_picker";
import { type FuseWeightedKey } from "../../../../resources/fuseMultiTerm";
import type { AddAutomationElementListItem, AddElementType } from "./types";
export declare const ITEM_SEARCH_KEYS: FuseWeightedKey[];
export declare class HaAutomationAddSearch extends LitElement {
    filter: string;
    items: AddAutomationElementListItem[];
    narrow: boolean;
    replacingItemKey?: string;
    addElementType: AddElementType;
    private _i18n;
    private _registries;
    private _states;
    private _showEntityId?;
    private _configEntryLookup?;
    private _relatedIdSets?;
    private _searchSectionTitle?;
    private _selectedSearchSection?;
    private _labelRegistry;
    private _list?;
    private _getDevicesMemoized;
    private _getLabelsMemoized;
    private _getEntitiesMemoized;
    private _getAreasAndFloorsMemoized;
    private _formatAreaFloorId;
    private _getPickerSources;
    private _removeKeyboardShortcuts?;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderSections;
    private _getRows;
    private _isCurrent;
    private _getRowRenderer;
    private _renderSearchResultRow;
    private get _currentItems();
    private _visibilityChanged;
    private _createFuseIndex;
    private _fuseIndexes;
    private _getFilteredItems;
    private _filterGroup;
    private _toggleSection;
    private _toggleSectionType;
    private _getSearchSectionLabel;
    private _convertItemsToComboBoxItems;
    private _focusSearchList;
    private _selectSearchResult;
    private _selectNextSearchItem;
    private _selectPreviousSearchItem;
    private _selectNextPageSearchItem;
    private _selectPreviousPageSearchItem;
    private _selectFirstSearchItem;
    private _selectLastSearchItem;
    private _pickSelectedSearchItem;
    private _selectSearchItem;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-add-search": HaAutomationAddSearch;
    }
    interface HASSDomEvents {
        "search-element-picked": PickerComboBoxItem | FloorComboBoxItem | EntityComboBoxItem;
    }
}
