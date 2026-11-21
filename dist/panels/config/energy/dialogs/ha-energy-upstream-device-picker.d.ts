import { LitElement } from "lit";
import "../../../../components/entity/state-badge";
import "../../../../components/ha-combo-box-item";
import "../../../../components/ha-generic-picker";
import "../../../../components/ha-svg-icon";
import type { DeviceConsumptionEnergyPreference } from "../../../../data/energy";
import { type StatisticsMetaData } from "../../../../data/recorder";
import type { HomeAssistant } from "../../../../types";
export declare class HaEnergyUpstreamDevicePicker extends LitElement {
    hass: HomeAssistant;
    value?: string;
    label?: string;
    helper?: string;
    emptyLabel?: string;
    disabled: boolean;
    possibleParents: DeviceConsumptionEnergyPreference[];
    devices: DeviceConsumptionEnergyPreference[];
    statsMetadata?: Record<string, StatisticsMetaData>;
    private _ambiguousStatisticIds;
    private _computeItem;
    private _items;
    private _getItems;
    private _renderItem;
    private _rowRenderer;
    private _valueRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-upstream-device-picker": HaEnergyUpstreamDevicePicker;
    }
}
