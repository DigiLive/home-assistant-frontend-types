import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-svg-icon";
import type { MarketplaceData } from "../../../data/marketplace/marketplace";
export declare class HaMarketplaceDiscover extends LitElement {
    marketplace: MarketplaceData;
    private _i18n;
    private _darkMode?;
    private _hassUrl;
    private _brandsAccessToken?;
    private _sections;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderRow;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-marketplace-discover": HaMarketplaceDiscover;
    }
}
