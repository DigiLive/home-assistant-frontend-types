import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/chips/ha-assist-chip";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-dropdown";
import "../../../../components/ha-dropdown-item";
import "../../../../components/ha-icon";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-overflow-menu";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import "../../../../layouts/hass-loading-screen";
import "../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../types";
export declare const PANEL_DASHBOARDS: string[];
export declare class HaConfigLovelaceDashboards extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _dashboards;
    private _loading;
    private _loadFailed;
    private _selected;
    private _dataTable;
    private _tableSettings;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _activeCollapsed;
    willUpdate(): void;
    private _columns;
    private _getItems;
    private _localizeType;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _getDashboards;
    private _retryGetDashboards;
    private _handleRowClicked;
    private _handleEdit;
    private _handleEditPanel;
    private _handleSetAsDefault;
    private _handleDelete;
    private _addDashboard;
    private _openDetailDialog;
    private _collectTakenDashboardUrlPaths;
    private _deleteDashboard;
    private _deletableSelected;
    private _handleSelectionChanged;
    private _removeSelected;
    private _handleColumnsChanged;
    private _handleCollapseChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-lovelace-dashboards": HaConfigLovelaceDashboards;
    }
}
