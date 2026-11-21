import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-button";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/list/ha-list-base";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
declare class ZHANetworkInfoPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _networkSettings?;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    private _fetchSettings;
    protected render(): TemplateResult;
    private _showChannelMigrationDialog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-network-info-page": ZHANetworkInfoPage;
    }
}
export {};
