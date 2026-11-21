import type { RouterOptions } from "../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../layouts/hass-router-page";
import type { HomeAssistant, Route } from "../../../types";
declare class HaConfigApps extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    route: Route;
    protected routerOptions: RouterOptions;
    protected updatePageEl(pageEl: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-apps": HaConfigApps;
    }
}
export {};
