import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-spinner";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/list/ha-list-base";
import "../../../../../layouts/hass-error-screen";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
declare class ThreadNetworkInfoPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    datasetId: string;
    private _loaded;
    private _error?;
    private _dataset?;
    private _otbrInfo?;
    private _otbrLoading;
    protected firstUpdated(changedProperties: PropertyValues<this>): Promise<void>;
    private _fetchThreadDataSet;
    private _fetchOTBRInfo;
    protected render(): TemplateResult;
    private _renderDataset;
    private _renderOTBRRows;
    private _renderRow;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "thread-network-info-page": ThreadNetworkInfoPage;
    }
}
export {};
