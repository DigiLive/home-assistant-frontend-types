import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../../types";
declare class ZWaveJSProvisioned extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    configEntryId: string;
    private _provisioningEntries;
    private _loading;
    private _loadFailed;
    private _nodeIdToDevice;
    private _tableSettings;
    protected render(): import("lit-html").TemplateResult<1>;
    private _columns;
    private _getData;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _fetchData;
    private _buildNodeIdToDeviceMap;
    private _fetchProvisioningEntries;
    private _retryFetchProvisioningEntries;
    private _unprovision;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-provisioned": ZWaveJSProvisioned;
    }
}
export {};
