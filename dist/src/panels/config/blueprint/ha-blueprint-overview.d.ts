import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-overflow-menu";
import "../../../components/ha-svg-icon";
import type { Blueprints } from "../../../data/blueprint";
import "../../../components/chips/ha-assist-chip";
import "../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../types";
declare class HaBlueprintOverview extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    blueprints: Record<"automation" | "script", Blueprints>;
    private _tableSettings;
    private _activeCollapsed?;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _usageCounts;
    private _usageCountRequest;
    private _usageCountsLoading;
    private _selected;
    private _deletedFullpaths;
    private _dataTable;
    private _processedBlueprints;
    private _columns;
    connectedCallback(): void;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _showHelp;
    private _addBlueprint;
    private _addBlueprintClicked;
    private _reload;
    private _loadUsageCounts;
    private _handleRowClicked;
    private _handleUsageClick;
    private _showUsed;
    private _createNew;
    private _share;
    private _reImport;
    private _delete;
    private _handleSelectionChanged;
    private _removeSelected;
    private _handleCollapseChanged;
    private _handleColumnsChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-blueprint-overview": HaBlueprintOverview;
    }
}
export {};
