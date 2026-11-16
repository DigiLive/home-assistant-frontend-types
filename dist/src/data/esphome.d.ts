import type { CallWS, HomeAssistant } from "../types";
export interface ESPHomeEncryptionKey {
    encryption_key: string | null;
}
export type ESPHomeSerialPortType = "TTL" | "RS232" | "RS485" | "USB_SERIAL";
export interface ESPHomeBluetoothProxyCapabilities {
    supported: boolean;
}
export interface ESPHomeZWaveProxyCapabilities {
    supported: boolean;
    home_id: number;
    config_entry_id: string | null;
}
export interface ESPHomeSerialProxy {
    name: string;
    port_type: ESPHomeSerialPortType | null;
    url: string | null;
}
export interface ESPHomeDeviceCapabilities {
    bluetooth_proxy: ESPHomeBluetoothProxyCapabilities;
    zwave_proxy: ESPHomeZWaveProxyCapabilities;
    serial_proxies: ESPHomeSerialProxy[];
}
export interface ESPHomeWizardEntity {
    /** Null when Home Assistant has no entity for it. */
    entity_id: string | null;
    description: string;
}
export interface ESPHomeWizardPage {
    title: string;
    description: string;
    entities: ESPHomeWizardEntity[];
}
export interface ESPHomeDeviceWizard {
    pages: ESPHomeWizardPage[];
}
export declare const fetchESPHomeEncryptionKey: (hass: HomeAssistant, entry_id: string) => Promise<ESPHomeEncryptionKey>;
export declare const fetchESPHomeDeviceCapabilities: (hass: {
    callWS: CallWS;
}, deviceId: string) => Promise<ESPHomeDeviceCapabilities>;
export declare const fetchESPHomeDeviceWizard: (hass: {
    callWS: CallWS;
}, deviceId: string) => Promise<ESPHomeDeviceWizard>;
