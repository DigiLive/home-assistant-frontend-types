import type { PropertyValues } from "lit";
import type { RouterOptions } from "../../layouts/hass-router-page";
import { HassRouterPage } from "../../layouts/hass-router-page";
import type { HomeAssistant } from "../../types";
declare class HaPanelProfile extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    protected routerOptions: RouterOptions;
    protected updatePageEl(el: any): void;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-profile": HaPanelProfile;
    }
}
export {};
