import type { CSSResultGroup, TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-fab";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-relative-time";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class BluetoothAdvertisementMonitorPanel extends LitElement {
    hass: HomeAssistant;
    route: Route;
    address?: string;
    narrow: boolean;
    isWide: boolean;
    private _data;
    private _scanners;
    private _sourceDevices;
    private _activeGrouping?;
    private _activeCollapsed;
    private _unsub_advertisements?;
    private _unsub_scanners?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues): void;
    private _columns;
    private _dataWithNamedSourceAndIds;
    protected render(): TemplateResult;
    private _handleGroupingChanged;
    private _handleCollapseChanged;
    private _handleRowClicked;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "bluetooth-advertisement-monitor": BluetoothAdvertisementMonitorPanel;
    }
}
