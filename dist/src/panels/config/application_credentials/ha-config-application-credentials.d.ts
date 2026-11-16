import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-help-tooltip";
import "../../../components/ha-icon-overflow-menu";
import "../../../components/ha-svg-icon";
import type { ApplicationCredential } from "../../../data/application_credential";
import "../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../types";
export declare class HaConfigApplicationCredentials extends LitElement {
    hass: HomeAssistant;
    _applicationCredentials: ApplicationCredential[];
    private _loading;
    private _loadFailed;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _selected;
    private _dataTable;
    private _tableSettings;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _columns;
    private _getApplicationCredentials;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleSelectionChanged;
    private _deleteCredential;
    private _deleteSelected;
    private _loadTranslations;
    private _fetchApplicationCredentials;
    private _retryFetchApplicationCredentials;
    private _addApplicationCredential;
    private _handleColumnsChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-application-credentials": HaConfigApplicationCredentials;
    }
}
