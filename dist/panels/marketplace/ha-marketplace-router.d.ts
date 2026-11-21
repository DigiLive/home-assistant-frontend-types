import type { RouterOptions } from "../../layouts/hass-router-page";
import { HassRouterPage } from "../../layouts/hass-router-page";
import type { HomeAssistant, Route } from "../../types";
import type { MarketplaceData } from "../../data/marketplace/marketplace";
import type { MarketplaceTab } from "./dashboards/ha-marketplace-dashboard";
interface MarketplacePageElement extends HTMLElement {
    marketplace: MarketplaceData;
    route: Route;
    narrow: boolean;
    isWide?: boolean;
    tab?: MarketplaceTab;
}
declare class HaMarketplaceRouter extends HassRouterPage {
    marketplace: MarketplaceData;
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    private _wideSidebar;
    private _wide;
    private _listeners;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updatePageEl(el: MarketplacePageElement): void;
    protected routerOptions: RouterOptions;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-marketplace-router": HaMarketplaceRouter;
    }
}
export {};
