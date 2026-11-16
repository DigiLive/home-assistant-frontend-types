import "@home-assistant/webawesome/dist/components/divider/divider";
import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/chips/ha-assist-chip";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-button";
import "../../../components/ha-icon";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../types";
export declare class HaConfigLabels extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _labels;
    private _loading;
    private _tableSettings;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _overflowMenu?;
    private _overflowLabel;
    private _openingOverflow;
    private _selected;
    private _dataTable;
    private _columns;
    private _data;
    private _toggleOverflowMenu;
    private _overflowMenuOpened;
    private _overflowMenuClosed;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _editLabel;
    private _showHelp;
    private _fetchLabels;
    private _addLabel;
    private _openDialog;
    private _createLabel;
    private _updateLabel;
    private _handleDeleteLabelClick;
    private _deleteLabel;
    private _handleSelectionChanged;
    private _deleteSelected;
    private _handleOverflowAction;
    private _navigateConfig;
    private _handleColumnsChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-labels": HaConfigLabels;
    }
}
