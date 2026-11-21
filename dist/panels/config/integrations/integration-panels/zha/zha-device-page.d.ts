import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-spinner";
import "../../../../../layouts/hass-error-screen";
import "../../../../../layouts/hass-subpage";
import "../../../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
import "./device-page/zha-device-bindings-pane";
import "./device-page/zha-device-summary-card";
import "./zha-device-neighbors";
import "./zha-device-signature";
import "./zha-manage-clusters";
declare class ZHADevicePage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    ieee: string;
    private _narrow;
    private _device?;
    private _currTab;
    private _loading;
    private _error?;
    private _deviceRefreshInterval?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _fetchDevice;
    private _startDeviceRefreshInterval;
    private _clearDeviceRefreshInterval;
    private _refreshDevice;
    private _syncTabFromRoute;
    private _isValidTab;
    private get _backPath();
    private _getTabs;
    private _getTabNavigation;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-page": ZHADevicePage;
    }
}
export {};
