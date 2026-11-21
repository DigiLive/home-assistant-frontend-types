import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-button-next";
import "../../../../../components/ha-list";
import "../../../../../components/input/ha-input-search";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/item/ha-list-item-option";
import "../../../../../components/list/ha-list-selectable";
import type { ZHADeviceEndpoint, ZHAEntityReference } from "../../../../../data/zha";
export interface DeviceEndpointRowData {
    id: string;
    name: string;
    area: string | undefined;
    model: string;
    manufacturer: string;
    endpoint_id: number;
    entities: ZHAEntityReference[];
    ieee: string;
    dev_id: string;
}
export interface DeviceEndpointSelectionChangedEvent {
    value: string[];
}
export declare class ZHADeviceEndpointList extends LitElement {
    narrow: boolean;
    selectable: boolean;
    scrollable: boolean;
    emptyText?: string;
    showDeviceLink: boolean;
    deviceEndpoints: ZHADeviceEndpoint[];
    private _filter;
    private _selectedDeviceIds;
    private _i18n;
    private _areas;
    private _list?;
    clearSelection(): void;
    protected render(): TemplateResult;
    private get _deviceEndpointRows();
    private _renderSelectableListRow;
    private _renderReadonlyListRow;
    private _filterDeviceEndpoints;
    private _deviceEndpointDetails;
    private _handleFilterChanged;
    private _handleItemSelected;
    private _handleItemDeselected;
    private _setSelectedDeviceId;
    private _fireSelectionChanged;
    private _stopPropagation;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-endpoint-list": ZHADeviceEndpointList;
    }
}
