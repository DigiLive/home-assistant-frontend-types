import { LitElement } from "lit";
import "../../../../../components/ha-select";
import "../../../../../components/ha-relative-time";
import "../../../../../components/ha-svg-icon";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../../types";
import "./lorawan-connection-link";
export declare class LoRaWANDevices extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    isWide: boolean;
    private _connectionId;
    private _queryParams;
    private _tabs;
    private _devices?;
    private _error;
    private _connections;
    private _configEntries?;
    private _unsubscribe?;
    private _connectionLabels;
    private _rows;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    private _subscribe;
    private _columns;
    private _time;
    private _readConnectionFilter;
    private _connectionChanged;
    private _clearFilter;
    protected render(): import("lit-html").TemplateResult<1>;
    private _rowClicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "lorawan-devices": LoRaWANDevices;
    }
}
