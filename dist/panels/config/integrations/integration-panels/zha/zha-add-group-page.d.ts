import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/input/ha-input";
import type { ZHADeviceEndpoint } from "../../../../../data/zha";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
import "./zha-device-endpoint-list";
export declare class ZHAAddGroupPage extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    deviceEndpoints: ZHADeviceEndpoint[];
    private _processingAdd;
    private _groupName;
    private _groupId?;
    private _zhaDeviceEndpointList;
    private _firstUpdatedCalled;
    private _selectedDevicesToAdd;
    connectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fetchData;
    private _handleAddSelectionChanged;
    private _createGroup;
    private _handleGroupIdChange;
    private _handleNameChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-add-group-page": ZHAAddGroupPage;
    }
}
