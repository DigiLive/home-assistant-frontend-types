import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-app-icon";
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
export declare class SerialConfigDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _ports?;
    private _modbusDevices?;
    private _error?;
    protected firstUpdated(): Promise<void>;
    private _fetchPorts;
    private _usedByModbus;
    private _portListItem;
    private _sortedPorts;
    private _consumerName;
    private _consumerPanel;
    private _consumerHref;
    private _renderConsumer;
    private _renderDiscoveryFlow;
    private _renderModbusLink;
    private _continueFlow;
    private _renderPortItem;
    private _showPortInfo;
    private _renderPortsCard;
    private _renderStatusCard;
    protected render(): TemplateResult;
    private _renderContent;
    private _handleRefresh;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "serial-config-dashboard": SerialConfigDashboard;
    }
}
