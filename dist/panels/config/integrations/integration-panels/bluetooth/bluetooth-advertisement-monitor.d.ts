import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-relative-time";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class BluetoothAdvertisementMonitorPanel extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _tabs;
    private _data;
    private _scanners;
    private _sourceDevices;
    private _tableSettings;
    private _activeCollapsed;
    private _unsub_advertisements?;
    private _unsub_scanners?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _columns;
    private _dataWithNamedSourceAndIds;
    protected render(): TemplateResult;
    private _handleCollapseChanged;
    private _handleRowClicked;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "bluetooth-advertisement-monitor": BluetoothAdvertisementMonitorPanel;
    }
}
