import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/date-picker/ha-date-range-nav";
import "../../components/ha-button";
import "../../components/ha-dropdown";
import "../../components/ha-dropdown-item";
import "../../components/ha-empty-state";
import "../../components/ha-filter-entity-types";
import "../../components/ha-filter-integrations";
import "../../components/ha-filter-logbook-causes";
import "../../components/ha-filter-pane-chip";
import "../../components/ha-filter-pane";
import "../../components/ha-icon-button";
import "../../components/ha-top-app-bar-fixed";
import type { HomeAssistant } from "../../types";
import "./ha-logbook";
export declare class HaPanelLogbook extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    _time: {
        range: [Date, Date];
    };
    _entityIds?: string[];
    private _showBack?;
    private _filters;
    private _expandedFilter?;
    private _showSources?;
    private _filterPane?;
    private _entitySources?;
    private _targetPickerValue;
    private _storedTargetPickerValue?;
    private _storedFilters?;
    constructor();
    protected render(): import("lit-html").TemplateResult<1>;
    private _sourcesShown;
    private _toggleSources;
    private _openSources;
    private _closeSources;
    private _typesChanged;
    private _integrationsChanged;
    private _causesChanged;
    private _setFilter;
    private _filterExpanded;
    private _clearSources;
    private _filterFunc;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _locationChanged;
    /** The entities to show activity for, or undefined for all of them. */
    private _getEntityIds;
    private __resolveTargetEntityIds;
    private __filterTargetEntityIds;
    private __logbookEntityIds;
    private __filterEntityIds;
    private _lastEntityIds?;
    private _shownEntityIds?;
    private _shownCauses?;
    private _stableEntityIds;
    private _applyURLParams;
    private _dateRangeChanged;
    private _targetsChanged;
    private _updatePath;
    private get _defaultState();
    private _isDefaultState;
    private _resetLogbook;
    private _handleMenuAction;
    private _downloadData;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-logbook": HaPanelLogbook;
    }
}
