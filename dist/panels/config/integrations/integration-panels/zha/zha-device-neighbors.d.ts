import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/data-table/ha-data-table";
import type { DataTableRowData } from "../../../../../components/data-table/ha-data-table";
import "../../../../../components/ha-card";
import "../../../../../components/ha-spinner";
import type { ZHADevice } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
export interface DeviceRowData extends DataTableRowData {
    id: string;
    name: string;
    lqi: number;
    depth: number;
    relationship: string;
}
declare class ZHADeviceNeighbors extends LitElement {
    hass: HomeAssistant;
    device?: ZHADevice;
    private _narrow;
    private _devices;
    private _loaded;
    private _error?;
    protected updated(changedProperties: PropertyValues<this>): void;
    private _deviceNeighbors;
    private _columns;
    protected render(): TemplateResult | typeof nothing;
    private _renderCardHeader;
    private _fetchData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-neighbors": ZHADeviceNeighbors;
    }
}
export {};
