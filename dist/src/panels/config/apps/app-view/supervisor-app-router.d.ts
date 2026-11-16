import type { HassioAddonDetails } from "../../../../data/hassio/addon";
import type { StoreAddonDetails } from "../../../../data/supervisor/store";
import type { RouterOptions } from "../../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../../layouts/hass-router-page";
import type { HomeAssistant } from "../../../../types";
import "./config/supervisor-app-config-tab";
import "./documentation/supervisor-app-documentation-tab";
import "./info/supervisor-app-info-tab";
import "./log/supervisor-app-log-tab";
declare class SupervisorAppRouter extends HassRouterPage {
    narrow: boolean;
    hass: HomeAssistant;
    addon: HassioAddonDetails | StoreAddonDetails;
    controlEnabled: boolean;
    protected routerOptions: RouterOptions;
    protected updatePageEl(el: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-router": SupervisorAppRouter;
    }
}
export {};
