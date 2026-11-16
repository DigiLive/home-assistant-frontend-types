import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../components/data-table/ha-data-table";
import "../../../components/ha-button";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import type { MarketplaceData } from "../../../data/marketplace/marketplace";
import "../../../layouts/hass-subpage";
import type { Route } from "../../../types";
export declare class HaMarketplaceCustomRepositories extends LitElement {
    marketplace: MarketplaceData;
    narrow: boolean;
    route: Route;
    private _i18n;
    private _api;
    private _customRepositories;
    private _columns;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleRowClicked;
    private _addFromLink;
    private _handleRemoveClick;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-marketplace-custom-repositories": HaMarketplaceCustomRepositories;
    }
}
