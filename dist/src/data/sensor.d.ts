import type { HomeAssistant } from "../types";
export declare const SENSOR_DEVICE_CLASS_BATTERY = "battery";
export declare const SENSOR_DEVICE_CLASS_TIMESTAMP = "timestamp";
export declare const SENSOR_DEVICE_CLASS_TEMPERATURE = "temperature";
export declare const SENSOR_DEVICE_CLASS_HUMIDITY = "humidity";
export declare const SENSOR_DEVICE_CLASS_UPTIME = "uptime";
export declare const SENSOR_TIMESTAMP_DEVICE_CLASSES: (string | undefined)[];
export declare const isNumericSensorDeviceClass: (deviceClass?: string) => boolean;
export interface SensorDeviceClassUnits {
    units: string[];
}
export declare const getSensorDeviceClassConvertibleUnits: (hass: HomeAssistant, deviceClass: string) => Promise<SensorDeviceClassUnits>;
