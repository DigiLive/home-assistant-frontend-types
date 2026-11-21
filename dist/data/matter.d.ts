import type { UnsubscribeFunc } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import { type DeviceRegistryEntry } from "./device/device_registry";
export declare enum NetworkType {
    THREAD = "thread",
    WIFI = "wifi",
    ETHERNET = "ethernet",
    UNKNOWN = "unknown"
}
export declare enum NodeType {
    END_DEVICE = "end_device",
    SLEEPY_END_DEVICE = "sleepy_end_device",
    ROUTING_END_DEVICE = "routing_end_device",
    BRIDGE = "bridge",
    UNKNOWN = "unknown"
}
export interface MatterFabricData {
    fabric_id: number;
    vendor_id: number;
    fabric_index: number;
    fabric_label: string | null;
    vendor_name: string | null;
}
export interface MatterNodeDiagnostics {
    node_id: number;
    network_type: NetworkType;
    node_type: NodeType;
    network_name: string | null;
    ip_adresses: string[];
    mac_address: string | null;
    available: boolean;
    active_fabrics: MatterFabricData[];
    active_fabric_index: number;
}
export type MatterPingResult = Record<string, boolean>;
export type MatterTopologyStrength = "strong" | "medium" | "weak" | "none" | "unknown";
export interface MatterTopologyDirectionInfo {
    strength: MatterTopologyStrength;
    lqi?: number | null;
    rssi?: number | null;
}
export interface MatterNetworkTopologyNode {
    id: string;
    kind: string;
    network_type: string;
    node_id?: number | null;
    ha_device_id?: string | null;
    role?: string | null;
    available?: boolean | null;
    is_bridge?: boolean | null;
    ext_address?: string | null;
    rloc16?: number | null;
    ext_pan_id?: string | null;
    network_name?: string | null;
    ssid?: string | null;
    bssid?: string | null;
    host_name?: string | null;
    vendor_name?: string | null;
    model_name?: string | null;
    last_seen?: number | null;
}
export interface MatterNetworkTopologyConnection {
    source: string;
    target: string;
    network: string;
    strength: MatterTopologyStrength;
    source_to_target?: MatterTopologyDirectionInfo | null;
    target_to_source?: MatterTopologyDirectionInfo | null;
    via_route_table?: boolean | null;
    path_cost?: number | null;
}
export interface MatterNetworkTopology {
    collected_at: number;
    nodes: MatterNetworkTopologyNode[];
    connections: MatterNetworkTopologyConnection[];
}
export declare const fetchMatterNetworkTopology: (hass: HomeAssistant, refresh?: boolean) => Promise<MatterNetworkTopology>;
export declare const subscribeMatterNetworkTopology: (hass: HomeAssistant, callback: (topology: MatterNetworkTopology) => void) => Promise<UnsubscribeFunc>;
export interface MatterCommissioningParameters {
    setup_pin_code: number;
    setup_manual_code: string;
    setup_qr_code: string;
    discriminator?: number | null;
    vendor_id?: number | null;
    product_id?: number | null;
    commissioning_timeout?: number | null;
}
export declare const canCommissionMatterExternal: (hass: HomeAssistant) => boolean;
export type MatterShareTarget = "apple_home" | "app_chooser";
export interface MatterShareDeviceParams {
    setup_qr_code: string;
    setup_pin_code: number;
    discriminator?: number;
    vendor_id?: number;
    product_id?: number;
    device_name?: string;
    remaining_seconds?: number;
}
/** The app chooser opens a window of its own, so unlike Apple Home it needs the discriminator and timeout. */
export declare const matterShareTargetExternal: (hass: HomeAssistant, params: MatterCommissioningParameters | undefined) => MatterShareTarget | undefined;
/** Capped at `timeout` in case the clock went back. */
export declare const matterShareRemainingSeconds: (timeout: number | null | undefined, requestedAt: number | undefined, now: number) => number | undefined;
/** Rejects with `{code, message}`; `code` is `canceled` when the user backed out. */
export declare const shareMatterDeviceExternal: (hass: HomeAssistant, params: MatterShareDeviceParams) => Promise<Record<string, never>>;
export declare const startExternalCommissioning: (hass: HomeAssistant) => Promise<void>;
export declare const watchForNewMatterDevice: (hass: HomeAssistant, callback: (device: DeviceRegistryEntry) => void) => UnsubscribeFunc;
export declare const redirectOnNewMatterDevice: (hass: HomeAssistant, callback?: () => void) => UnsubscribeFunc;
export declare const addMatterDevice: (hass: HomeAssistant) => void;
export declare const commissionMatterDevice: (hass: HomeAssistant, code: string, networkOnly: boolean) => Promise<void>;
export declare const acceptSharedMatterDevice: (hass: HomeAssistant, pin: number) => Promise<void>;
export declare const matterSetWifi: (hass: HomeAssistant, network_name: string, password: string) => Promise<void>;
export declare const matterSetThread: (hass: HomeAssistant, thread_operation_dataset: string) => Promise<void>;
export declare const getMatterNodeDiagnostics: (hass: HomeAssistant, device_id: string) => Promise<MatterNodeDiagnostics>;
export declare const pingMatterNode: (hass: HomeAssistant, device_id: string) => Promise<MatterPingResult>;
export declare const openMatterCommissioningWindow: (hass: HomeAssistant, device_id: string) => Promise<MatterCommissioningParameters>;
export declare const removeMatterFabric: (hass: HomeAssistant, device_id: string, fabric_index: number) => Promise<void>;
export declare const interviewMatterNode: (hass: HomeAssistant, device_id: string) => Promise<void>;
