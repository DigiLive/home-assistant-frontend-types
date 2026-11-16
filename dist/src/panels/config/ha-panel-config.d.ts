import type { PropertyValues } from "lit";
import type { HASSDomEvent } from "../../common/dom/fire_event";
import type { RouterOptions } from "../../layouts/hass-router-page";
import { HassRouterPage } from "../../layouts/hass-router-page";
import type { HomeAssistant, Route } from "../../types";
declare global {
    interface HASSDomEvents {
        "ha-refresh-cloud-status": undefined;
    }
    interface GlobalEventHandlersEventMap {
        "ha-refresh-cloud-status": HASSDomEvent<HASSDomEvents["ha-refresh-cloud-status"]>;
    }
}
declare class HaPanelConfig extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    protected routerOptions: RouterOptions;
    private _wideSidebar;
    private _wide;
    private _cloudStatus?;
    private _listeners;
    private _unsubCloudEvents?;
    private _cloudStatusRequestId;
    private _cloudStatusTimeout?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _cloudLoaded;
    private _listenOnWindow;
    private _subscribeCloudEvents;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected updatePageEl(el: any): void;
    private _updateCloudStatus;
    private _clearCloudStatusTimeout;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-config": HaPanelConfig;
    }
}
export {};
