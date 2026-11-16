import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/device/ha-device-condition-picker";
import "../../../../../components/device/ha-device-picker";
import "../../../../../components/ha-form/ha-form";
import type { DeviceCondition } from "../../../../../data/device/device_automation";
import type { EntityRegistryEntry } from "../../../../../data/entity/entity_registry";
import type { HomeAssistant } from "../../../../../types";
export declare class HaDeviceCondition extends LitElement {
    hass: HomeAssistant;
    condition: DeviceCondition;
    disabled: boolean;
    private _deviceId?;
    private _capabilities?;
    private _compositeSplits?;
    private _replacementDeviceIds?;
    private _loadingCompositeSplits;
    _entityReg: EntityRegistryEntry[];
    private _origCondition?;
    static get defaultConfig(): DeviceCondition;
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
    private _deviceConditionPicked;
    private _extraFieldsChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-device": HaDeviceCondition;
    }
}
