import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/device/ha-device-action-picker";
import "../../../../../components/device/ha-device-picker";
import "../../../../../components/ha-form/ha-form";
import type { DeviceAction } from "../../../../../data/device/device_automation";
import type { EntityRegistryEntry } from "../../../../../data/entity/entity_registry";
import type { HomeAssistant } from "../../../../../types";
export declare class HaDeviceAction extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: DeviceAction;
    private _deviceId?;
    private _capabilities?;
    private _compositeSplits?;
    private _replacementDeviceIds?;
    private _loadingCompositeSplits;
    _entityReg: EntityRegistryEntry[];
    private _origAction?;
    static get defaultConfig(): DeviceAction;
    private _extraFieldsData;
    shouldUpdate(_changedProperties: PropertyValues<this>): boolean;
    private _resolveReplacements;
    private _loadCompositeSplits;
    protected render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues<this>): void;
    private _getCapabilities;
    private _devicePicked;
    private _deviceActionPicked;
    private _extraFieldsChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-device_id": HaDeviceAction;
    }
}
