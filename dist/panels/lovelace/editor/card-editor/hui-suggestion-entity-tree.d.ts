import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/state-badge";
import "../../../../components/ha-combo-box-item";
import "../../../../components/ha-domain-icon";
import "../../../../components/ha-floor-icon";
import "../../../../components/ha-icon";
import "../../../../components/ha-section-title";
import "../../../../components/ha-svg-icon";
import "../../../../components/input/ha-input-search";
import "../../../../components/item/ha-list-item-button";
import "../../../../components/list/ha-list-base";
import "../../../../components/list/ha-list-virtualized";
import type { HomeAssistant } from "../../../../types";
/**
 * @element hui-suggestion-entity-tree
 *
 * @summary Searchable tree of entities grouped by floor, area and domain.
 *
 * @cssprop --ha-suggestion-entity-tree-padding-bottom - Space at the end of the scrolling tree. Defaults to `var(--ha-space-3)` when smaller.
 *
 * @fires entity-picked - Fired with the ID of the picked entity.
 */
export declare class HuiSuggestionEntityTree extends LitElement {
    hass: HomeAssistant;
    selectedEntityId?: string;
    private _filter;
    private _expanded;
    private _configEntryLookup?;
    private _domainLocalize?;
    private _tree?;
    private _fuseIndex?;
    private _searchInput?;
    private _list?;
    private _removeKeyboardShortcuts?;
    focus(): Promise<void>;
    connectedCallback(): void;
    private _loadDomainTranslations;
    disconnectedCallback(): void;
    private _deviceDomain;
    private _searchMemo;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _isExpanded;
    private _renderTree;
    private _getSearchRows;
    private _renderSearchResults;
    private _getSearchRowRenderer;
    private _renderSearchRow;
    private _renderChevron;
    private _renderFloor;
    private _renderArea;
    private _renderDevice;
    private _renderUnassignedSection;
    private _renderEntity;
    private _toggleNode;
    private _pickEntity;
    private _expandToEntity;
    private _focusList;
    private _resetActiveItem;
    private _selectNextItem;
    private _selectPreviousItem;
    private _selectFirstItem;
    private _selectLastItem;
    private _selectNextPage;
    private _selectPreviousPage;
    private _activateSelectedItem;
    private _handleFilterChange;
    private _setFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-suggestion-entity-tree": HuiSuggestionEntityTree;
    }
    interface HASSDomEvents {
        "entity-picked": {
            entityId: string;
        };
    }
}
