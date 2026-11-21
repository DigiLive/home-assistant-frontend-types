import type { PropertyValues } from "lit";
import type { RouterOptions } from "../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../layouts/hass-router-page";
import type { HomeAssistant } from "../../../types";
import "./ha-config-device-page";
import "./ha-config-devices-dashboard";
declare class HaConfigDevices extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    protected routerOptions: RouterOptions;
    private _configEntries?;
    private _configEntriesFailed;
    private _manifests;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected updatePageEl(pageEl: any): void;
    private _loadData;
    private _reloadConfigEntries;
    private _loadConfigEntries;
}
declare global {
    interface HASSDomEvents {
        "reload-config-entries": undefined;
    }
    interface HTMLElementTagNameMap {
        "ha-config-devices": HaConfigDevices;
    }
}
export {};
