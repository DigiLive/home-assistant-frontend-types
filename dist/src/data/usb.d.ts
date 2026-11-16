import type { CallWS, HomeAssistant } from "../types";
export interface SerialPort {
    device: string;
    resolved_device: string | null;
    serial_number: string | null;
    manufacturer: string | null;
    description: string | null;
    interface_description?: string | null;
    interface_num?: number | null;
    vid?: string;
    pid?: string;
    bcd_device?: number | null;
    matching_integrations: string[];
    present: boolean;
}
export interface SerialPortConsumer {
    kind: "config_entry" | "app";
    title: string;
    active: boolean;
    domain: string | null;
    config_entry_id: string | null;
    slug: string | null;
}
export interface SerialPortDiscoveryFlow {
    flow_id: string;
    domain: string;
}
export interface SerialPortUsage extends SerialPort {
    consumers: SerialPortConsumer[];
    discovery_flows: SerialPortDiscoveryFlow[];
}
export declare const scanUSBDevices: (hass: HomeAssistant) => Promise<unknown>;
export declare const listSerialPorts: (callWS: HomeAssistant["callWS"]) => Promise<SerialPort[]>;
export declare const listSerialPortsWithUsage: (hass: {
    callWS: CallWS;
}) => Promise<SerialPortUsage[]>;
export declare const listSerialIntegrations: (hass: {
    callWS: CallWS;
}) => Promise<string[]>;
