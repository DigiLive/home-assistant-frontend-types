import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/chart/ha-network-graph";
import "../../../../../components/input/ha-input-search";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class ZHANetworkVisualizationPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    deviceId?: string;
    private _networkData;
    private _devices;
    private _searchFilter;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderInputSearch;
    private _fetchData;
    private _getSearchableAttributes;
    private _handleSearchChange;
    private _tooltipFormatter;
    private _refreshTopology;
    private _handleChartClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-network-visualization-page": ZHANetworkVisualizationPage;
    }
}
