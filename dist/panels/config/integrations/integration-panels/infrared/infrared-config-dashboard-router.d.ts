import type { RouterOptions } from "../../../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../../../layouts/hass-router-page";
import type { HomeAssistant } from "../../../../../types";
declare class InfraredConfigDashboardRouter extends HassRouterPage {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    protected routerOptions: RouterOptions;
    private _devices;
    protected updatePageEl(el: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "infrared-config-dashboard-router": InfraredConfigDashboardRouter;
    }
}
export {};
