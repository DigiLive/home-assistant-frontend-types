import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../components/data-table/ha-data-table";
import "../../../components/ha-button";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import "../../../layouts/hass-error-screen";
import "../../../layouts/hass-loading-screen";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
export declare class HaConfigAppsRepositories extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    private _repositories?;
    private _addon?;
    private _error?;
    protected firstUpdated(): void;
    private _columns;
    private _filteredRepositories;
    private _filteredUsedRepositories;
    private _data;
    protected render(): import("lit-html").TemplateResult<1>;
    private _showAddRepositoryDialog;
    private _removeRepository;
    private _loadData;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-apps-repositories": HaConfigAppsRepositories;
    }
}
