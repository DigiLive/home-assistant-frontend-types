import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { DeviceSelector } from "../../data/selector";
import "../device/ha-device-picker";
import "../device/ha-devices-picker";
export declare class HaDeviceSelector extends LitElement {
    selector: DeviceSelector;
    private _registries;
    private _api;
    private _configEntries?;
    private _fetchedConfigEntries;
    value?: any;
    label?: string;
    helper?: string;
    placeholder?: string;
    disabled: boolean;
    required: boolean;
    private _deviceIntegrationLookup;
    private _hasIntegration;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _filterDevices;
    private _filterEntities;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-device": HaDeviceSelector;
    }
}
