import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../layouts/hass-error-screen";
import type { Route } from "../../types";
import type { MarketplaceData } from "../../data/marketplace/marketplace";
declare class HaMarketplaceMyRedirect extends LitElement {
    marketplace: MarketplaceData;
    route: Route;
    narrow: boolean;
    private _i18n;
    private _error?;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _createRedirectUrl;
    private _createRedirectParams;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-marketplace-my-redirect": HaMarketplaceMyRedirect;
    }
}
export {};
