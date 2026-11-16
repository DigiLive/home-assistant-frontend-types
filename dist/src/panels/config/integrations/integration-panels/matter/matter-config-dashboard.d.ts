import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/item/ha-list-item-button";
import "../../../../../components/list/ha-list-nav";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
export declare class MatterConfigDashboard extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _configEntry?;
    private _offlineDevices;
    private _asyncDataLoaded;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    private _matterDeviceIds;
    private _entityCount;
    protected render(): TemplateResult | typeof nothing;
    private _addDevice;
    private _renderNetworkStatus;
    private _renderMyNetworkCard;
    private _renderNavigationCard;
    private _fetchConfigEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-config-dashboard": MatterConfigDashboard;
    }
}
