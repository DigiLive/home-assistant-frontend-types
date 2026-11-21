import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import "../../../components/input/ha-input-search";
import "../../../layouts/hass-error-screen";
import "../../../layouts/hass-loading-screen";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "./components/supervisor-apps-card-content";
export declare class HaConfigAppsInstalled extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    private _addonInfo?;
    private _filter?;
    private _error?;
    private _checkingUpdates;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _getAddons;
    private _handleSearchChange;
    private _loadData;
    private _handleCheckUpdates;
    private _addonTapped;
    private _openStore;
    private _getAppTags;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-apps-installed": HaConfigAppsInstalled;
    }
}
