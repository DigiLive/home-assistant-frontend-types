import type { HomeAssistant } from "../types";
/** Transport with host and port, or with the serial device path. */
export type ModbusEndpoint = [string, string, number] | [string, string];
/** Whether a connection belongs to a config entry or to a YAML hub. */
export type ModbusConnectionSource = "config_entry" | "yaml";
export interface ModbusConnection {
    endpoint: ModbusEndpoint;
    connected: boolean;
    source: ModbusConnectionSource;
    /**
     * The unit IDs each holder uses, keyed by config entry ID, or by hub name
     * when `source` is `"yaml"`.
     */
    units: Record<string, number[]>;
}
export declare const listModbusConnections: (hass: HomeAssistant) => Promise<ModbusConnection[]>;
/** The serial port a connection runs over, if it is not a network connection. */
export declare const modbusSerialDevice: (endpoint: ModbusEndpoint) => string | undefined;
/** The address of the device, as `host:port` or as a device path. */
export declare const modbusEndpointTarget: (endpoint: ModbusEndpoint) => string;
export declare const modbusUnitCount: (connection: ModbusConnection) => number;
