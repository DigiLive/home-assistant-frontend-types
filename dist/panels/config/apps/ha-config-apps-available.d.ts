import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/input/ha-input-search";
import "../../../layouts/hass-error-screen";
import "../../../layouts/hass-loading-screen";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "./supervisor-apps-repository";
export declare class HaConfigAppsAvailable extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    private _store?;
    private _addon?;
    private _error?;
    private _filter?;
    private _checkingUpdates;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected render(): TemplateResult<1>;
    private _addonRepositories;
    private _handleAction;
    private _refreshData;
    private _apiCalled;
    private _manageRepositoriesClicked;
    private _manageRegistries;
    private _addRepository;
    private _loadData;
    private _handleCollectionRefresh;
    private _filterChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HASSDomEvents {
        "apps-collection-refresh": {
            collection: "addon" | "store";
        };
    }
    interface HTMLElementTagNameMap {
        "ha-config-apps-available": HaConfigAppsAvailable;
    }
}
