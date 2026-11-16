import type { BatterySourceTypeEnergyPreference, DeviceConsumptionEnergyPreference, EnergyGasUnitClass, EnergyInfo, GasSourceTypeEnergyPreference, GridSourceTypeEnergyPreference, SolarSourceTypeEnergyPreference, WaterSourceTypeEnergyPreference, HomeSourceTypeEnergyPreference } from "../../../../data/energy";
import type { StatisticsMetaData } from "../../../../data/recorder";
import type { HomeAssistant } from "../../../../types";
export interface EnergySettingsGridDialogParams {
    source?: GridSourceTypeEnergyPreference;
    grid_sources: GridSourceTypeEnergyPreference[];
    statsMetadata?: Record<string, StatisticsMetaData>;
    saveCallback: (source: GridSourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsSolarDialogParams {
    info: EnergyInfo;
    source?: SolarSourceTypeEnergyPreference;
    solar_sources: SolarSourceTypeEnergyPreference[];
    statsMetadata?: Record<string, StatisticsMetaData>;
    saveCallback: (source: SolarSourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsHomeDialogParams {
    hass: HomeAssistant;
    source?: HomeSourceTypeEnergyPreference;
    saveCallback: (source: HomeSourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsBatteryDialogParams {
    source?: BatterySourceTypeEnergyPreference;
    battery_sources: BatterySourceTypeEnergyPreference[];
    statsMetadata?: Record<string, StatisticsMetaData>;
    saveCallback: (source: BatterySourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsGasDialogParams {
    source?: GasSourceTypeEnergyPreference;
    allowedGasUnitClass?: EnergyGasUnitClass;
    gas_sources: GasSourceTypeEnergyPreference[];
    statsMetadata?: Record<string, StatisticsMetaData>;
    saveCallback: (source: GasSourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsWaterDialogParams {
    source?: WaterSourceTypeEnergyPreference;
    water_sources: WaterSourceTypeEnergyPreference[];
    statsMetadata?: Record<string, StatisticsMetaData>;
    saveCallback: (source: WaterSourceTypeEnergyPreference) => Promise<void>;
}
export interface EnergySettingsDeviceDialogParams {
    device?: DeviceConsumptionEnergyPreference;
    device_consumptions: DeviceConsumptionEnergyPreference[];
    statsMetadata?: Record<string, StatisticsMetaData>;
    saveCallback: (device: DeviceConsumptionEnergyPreference) => Promise<void>;
}
export interface EnergySettingsDeviceWaterDialogParams {
    device?: DeviceConsumptionEnergyPreference;
    device_consumptions: DeviceConsumptionEnergyPreference[];
    statsMetadata?: Record<string, StatisticsMetaData>;
    saveCallback: (device: DeviceConsumptionEnergyPreference) => Promise<void>;
}
export declare const showEnergySettingsDeviceDialog: (element: HTMLElement, dialogParams: EnergySettingsDeviceDialogParams) => void;
export declare const showEnergySettingsBatteryDialog: (element: HTMLElement, dialogParams: EnergySettingsBatteryDialogParams) => void;
export declare const showEnergySettingsSolarDialog: (element: HTMLElement, dialogParams: EnergySettingsSolarDialogParams) => void;
export declare const showEnergySettingsHomeDialog: (element: HTMLElement, dialogParams: EnergySettingsHomeDialogParams) => void;
export declare const showEnergySettingsGasDialog: (element: HTMLElement, dialogParams: EnergySettingsGasDialogParams) => void;
export declare const showEnergySettingsWaterDialog: (element: HTMLElement, dialogParams: EnergySettingsWaterDialogParams) => void;
export declare const showEnergySettingsDeviceWaterDialog: (element: HTMLElement, dialogParams: EnergySettingsDeviceWaterDialogParams) => void;
export declare const showEnergySettingsGridDialog: (element: HTMLElement, dialogParams: EnergySettingsGridDialogParams) => void;
