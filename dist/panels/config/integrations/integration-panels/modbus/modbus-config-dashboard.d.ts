import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/item/ha-list-item-button";
import "../../../../../components/list/ha-list-base";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class ModbusConfigDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _connections?;
    private _entries?;
    private _error?;
    protected firstUpdated(): Promise<void>;
    private _fetchConnections;
    private _transportName;
    private _stateName;
    private _secondaryName;
    private _connectionListItem;
    private _sortedConnections;
    private _renderUnits;
    private _renderHolder;
    private _renderSerialPortLink;
    private _renderState;
    private _renderConnectionItem;
    private _renderConnectionsCard;
    private _renderStatusCard;
    protected render(): TemplateResult;
    private _renderContent;
    private _handleRefresh;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "modbus-config-dashboard": ModbusConfigDashboard;
    }
}
