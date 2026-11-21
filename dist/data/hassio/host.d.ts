import type { HomeAssistant } from "../../types";
export interface HassioHostInfo {
    agent_version: string;
    chassis: string | null;
    cpe: string | null;
    deployment: string | null;
    disk_life_time: number | null;
    disk_free: number;
    disk_total: number;
    disk_used: number;
    features: string[];
    hostname: string | null;
    kernel: string | null;
    operating_system: string | null;
    boot_timestamp: number | null;
    startup_time: number | null;
}
export interface HassioHassOSInfo {
    board: string | null;
    boot: string | null;
    update_available: boolean;
    version_latest: string | null;
    version: string | null;
    version_pending: string | null;
    data_disk: string | null;
}
export interface Datadisk {
    name: string;
    vendor: string;
    model: string;
    serial: string;
    size: number;
    id: string;
    dev_path: string;
}
export interface DatadiskList {
    devices: string[];
    disks: Datadisk[];
}
export interface HostDiskPartition {
    device: string;
    uuid: string;
    label: string;
    filesystem: string;
    size: number;
    read_only: boolean;
    mountable: boolean;
}
export interface HostDisk extends Datadisk {
    connection_bus: string;
    removable: boolean;
    ejectable: boolean;
    partitions: HostDiskPartition[];
}
export interface HostDisks {
    disks: HostDisk[];
}
export interface HostDisksUsage {
    total_bytes?: number;
    used_bytes: number;
    id: string;
    label: string;
    children?: HostDisksUsage[];
}
export declare const fetchHassioHostInfo: (hass: HomeAssistant) => Promise<HassioHostInfo>;
export declare const fetchHassioHassOsInfo: (hass: HomeAssistant) => Promise<HassioHassOSInfo>;
export declare const rebootHost: (hass: HomeAssistant) => Promise<unknown>;
export declare const shutdownHost: (hass: HomeAssistant) => Promise<unknown>;
export declare const updateOS: (hass: HomeAssistant) => Promise<unknown>;
export declare const configSyncOS: (hass: HomeAssistant) => Promise<unknown>;
export declare const changeHostOptions: (hass: HomeAssistant, options: any) => Promise<unknown>;
export declare const moveDatadisk: (hass: HomeAssistant, device: string) => Promise<unknown>;
export declare const listDatadisks: (hass: HomeAssistant) => Promise<DatadiskList>;
export declare const fetchHostDisks: (callWS: HomeAssistant["callWS"]) => Promise<HostDisks>;
export declare const fetchHostDisksUsage: (hass: HomeAssistant, disk?: string, maxDepth?: number) => Promise<HostDisksUsage>;
