import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-icon-button";
import "../../layouts/hass-loading-screen";
import type { HomeAssistant, PanelInfo, Route } from "../../types";
interface AppPanelConfig {
    addon?: string;
}
declare class HaPanelApp extends LitElement {
    hass: HomeAssistant;
    route: Route;
    panel: PanelInfo<AppPanelConfig>;
    narrow: boolean;
    private _addon?;
    private _loadingMessage?;
    private _kioskMode;
    private _iframeLoaded;
    private _handleSafeArea;
    private _enabledKioskMode;
    private _sessionKeepAlive?;
    private _fetchDataTimeout?;
    private _autoRetryUntil?;
    private _iframeRef;
    /**
     * iFrames can subscribe to Home Assistant specific updates
     */
    private _iframeSubscribeUpdates;
    protected updated(changedProps: PropertyValues<this>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _getAddonSlug;
    private _getAddonSlugFromRoutePanel;
    private _showErrorAndNavigateHome;
    private _fetchData;
    private _checkLoaded;
    private _reloadIframe;
    private _toggleMenu;
    private _handleIframeMessage;
    private _handleResize;
    private _sendPropertiesToIframe;
    private _computeAppRoute;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-app": HaPanelApp;
    }
}
export {};
