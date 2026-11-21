import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/item/ha-list-item-button";
import "../../../../../components/list/ha-list-base";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class BluetoothAdapterInfoPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _configEntries;
    private _connectionAllocationData;
    private _scannerStates;
    private _scannerDetails?;
    private _unsubConnectionAllocations?;
    private _unsubScannerState?;
    private _unsubScannerDetails?;
    connectedCallback(): void;
    private _loadConfigEntries;
    private _subscribeBluetoothConnectionAllocations;
    private _subscribeBluetoothScannerState;
    private _subscribeScannerDetails;
    disconnectedCallback(): void;
    private _getBluetoothDevices;
    protected render(): TemplateResult;
    private _renderAdaptersList;
    private _renderScannerMismatchWarning;
    private _formatMode;
    private _formatModeLabel;
    private _formatScannerModeText;
    private _handleEnable;
    private _openOptionFlow;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "bluetooth-adapter-info-page": BluetoothAdapterInfoPage;
    }
}
