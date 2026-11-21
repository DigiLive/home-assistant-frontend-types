import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/item/ha-list-item-button";
import "../../../../../components/list/ha-list-nav";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class BluetoothConfigDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _configEntries;
    private _connectionAllocationData;
    private _scannerStates;
    private _advertisementData;
    private _unsubConnectionAllocations?;
    private _unsubScannerState?;
    private _unsubAdvertisements?;
    connectedCallback(): void;
    private _loadConfigEntries;
    private _subscribeBluetoothConnectionAllocations;
    private _subscribeBluetoothScannerState;
    private _subscribeBluetoothAdvertisements;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "bluetooth-config-dashboard": BluetoothConfigDashboard;
    }
}
