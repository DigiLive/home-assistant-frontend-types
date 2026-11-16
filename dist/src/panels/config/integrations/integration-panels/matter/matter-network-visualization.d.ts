import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/chart/ha-network-graph";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-spinner";
import "../../../../../components/input/ha-input-search";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class MatterNetworkVisualization extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    route: Route;
    private _topology?;
    private _notSupported;
    private _error?;
    private _refreshing;
    private _searchFilter;
    private _expandedBridges;
    private _unsub?;
    private _throttledUpdateTopology;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribe;
    protected render(): TemplateResult<1>;
    private _renderContent;
    private _renderInputSearch;
    private _handleSearchChange;
    private _refreshTopology;
    private _formatNetworkData;
    private _getTopologyNode;
    private _getBridgedDevice;
    private _getConnection;
    private _getNodeName;
    private _getDeviceSearchableAttributes;
    private _getSearchableAttributes;
    private _localizeDynamic;
    private _formatDirection;
    private _tooltipFormatter;
    private _bridgedDeviceTooltip;
    private _handleChartClick;
    private _toggleBridge;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-network-visualization": MatterNetworkVisualization;
    }
}
