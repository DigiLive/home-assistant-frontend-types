import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/data-table/ha-data-table-icon";
import "../../../components/ha-button";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../types";
export declare class HaConfigUsers extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _users;
    private _loading;
    private _loadFailed;
    private _tableSettings;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _activeCollapsed?;
    private _columns;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _userData;
    private _fetchUsers;
    private _retryFetchUsers;
    private _editUser;
    private _addUser;
    private _handleCollapseChanged;
    private _handleColumnsChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-users": HaConfigUsers;
    }
}
