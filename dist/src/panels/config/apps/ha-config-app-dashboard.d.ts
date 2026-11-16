import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../layouts/hass-error-screen";
import "../../../layouts/hass-loading-screen";
import "../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "./app-view/supervisor-app-router";
declare class HaConfigAppDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    private _addon?;
    private _error?;
    private _controlEnabled;
    private _fromStore;
    private _loading;
    private _computeTail;
    protected firstUpdated(): Promise<void>;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _loadAddon;
    private _handleMissingRepository;
    private _apiCalled;
    private _enableControl;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-app-dashboard": HaConfigAppDashboard;
    }
}
export {};
