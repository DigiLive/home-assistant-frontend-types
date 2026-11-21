import type { RouterOptions } from "../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../layouts/hass-router-page";
import type { PageNavigation } from "../../../layouts/hass-tabs-subpage";
import type { HomeAssistant } from "../../../types";
export declare const hardwareTabs: (hass: HomeAssistant) => PageNavigation[];
declare class HaConfigHardware extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    protected routerOptions: RouterOptions;
    protected updatePageEl(pageEl: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-hardware": HaConfigHardware;
    }
}
export {};
