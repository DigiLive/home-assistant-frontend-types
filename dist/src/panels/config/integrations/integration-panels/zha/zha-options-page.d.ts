import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-select";
import "../../../../../components/ha-switch";
import "../../../../../components/input/ha-input";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/list/ha-list-base";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
declare class ZHAOptionsPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    private _configuration?;
    private _customMains;
    private _customBattery;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    private _fetchConfiguration;
    private _getUnavailableTimeoutOptions;
    private _getUnavailableDropdownValue;
    protected render(): TemplateResult;
    private _enableIdentifyOnJoinChanged;
    private _enhancedLightTransitionChanged;
    private _lightTransitioningFlagChanged;
    private _groupMembersAssumeStateChanged;
    private _enableMainsStartupPollingChanged;
    private _defaultLightTransitionChanged;
    private _customMainsSecondsChanged;
    private _customBatterySecondsChanged;
    private _mainsUnavailableChanged;
    private _batteryUnavailableChanged;
    private _updateConfiguration;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-options-page": ZHAOptionsPage;
    }
}
export {};
