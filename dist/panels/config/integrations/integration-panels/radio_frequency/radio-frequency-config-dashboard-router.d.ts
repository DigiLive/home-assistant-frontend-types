import type { PropertyValues } from "lit";
import type { RouterOptions } from "../../../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../../../layouts/hass-router-page";
import type { HomeAssistant } from "../../../../../types";
declare class RadioFrequencyConfigDashboardRouter extends HassRouterPage {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    private _transmitters;
    private _fetched;
    protected routerOptions: RouterOptions;
    protected willUpdate(changedProps: PropertyValues): void;
    private _fetchTransmitters;
    protected updatePageEl(el: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "radio-frequency-config-dashboard-router": RadioFrequencyConfigDashboardRouter;
    }
}
export {};
