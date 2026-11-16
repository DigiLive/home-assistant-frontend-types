import { type CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-icon-button";
import "../../../components/ha-list";
import "../../../components/ha-list-item";
import "../../../components/radio/ha-radio-group";
import "../../../components/radio/ha-radio-option";
import "../../../components/ha-spinner";
import "../../../components/ha-tab-group";
import "../../../components/ha-tab-group-tab";
import "../../../components/input/ha-input";
import type { HomeAssistant } from "../../../types";
export declare class HassioNetwork extends LitElement {
    hass: HomeAssistant;
    private _accessPoints;
    private _curTabIndex;
    private _dirty;
    private _interface?;
    private _interfaces;
    private _processing;
    private _scanning;
    private _wifiConfiguration?;
    private _dnsMenuOpen;
    protected firstUpdated(): void;
    private _fetchNetworkInfo;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderTab;
    private _selectAP;
    private _scanForAP;
    private _renderIPConfiguration;
    private _getPredefinedDnsName;
    private _updateNetwork;
    private _clear;
    private _handleTabActivated;
    private _handleRadioValueChanged;
    private _handleRadioValueChangedAp;
    private _handleInputValueChanged;
    private _handleInputValueChangedWifi;
    private _addAddress;
    private _removeAddress;
    private _handleDNSMenuOpened;
    private _handleDNSMenuClosed;
    private _addPredefinedDNS;
    private _addCustomDNS;
    private _removeNameserver;
    private _handleDropdownSelect;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-network": HassioNetwork;
    }
}
