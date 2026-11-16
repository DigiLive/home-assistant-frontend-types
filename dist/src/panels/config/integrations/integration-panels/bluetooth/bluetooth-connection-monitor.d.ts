import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-icon-button";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class BluetoothConnectionMonitorPanel extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _tabs;
    private _data;
    private _scanners;
    private _addressNames;
    private _sourceDevices;
    private _tableSettings;
    private _activeCollapsed;
    private _unsubConnectionAllocations?;
    private _unsubScanners?;
    private _unsub_advertisements?;
    private _connectionAllocationData;
    connectedCallback(): void;
    private _subscribeBluetoothConnectionAllocations;
    disconnectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _columns;
    private _dataWithNamedSourceAndIds;
    protected render(): TemplateResult;
    private _handleCollapseChanged;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "bluetooth-connection-monitor": BluetoothConnectionMonitorPanel;
    }
}
