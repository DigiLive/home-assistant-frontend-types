import type { HomeAssistant } from "../../types";
import type { HostDisk, HostDiskPartition } from "../hassio/host";
export declare enum SupervisorMountType {
    BIND = "bind",
    CIFS = "cifs",
    DISK = "disk",
    NFS = "nfs"
}
export declare enum SupervisorMountUsage {
    BACKUP = "backup",
    MEDIA = "media",
    SHARE = "share"
}
export declare enum SupervisorMountState {
    ACTIVE = "active",
    ACTIVATING = "activating",
    DEACTIVATING = "deactivating",
    FAILED = "failed",
    INACTIVE = "inactive",
    MAINTENANCE = "maintenance",
    RELOADING = "reloading"
}
interface MountOptions {
    default_backup_mount?: string | null;
}
export type CIFSVersion = "auto" | "1.0" | "2.0";
interface SupervisorMountBase {
    name: string;
    usage: SupervisorMountUsage | null;
    type: SupervisorMountType;
    read_only: boolean;
}
export interface SupervisorMountResponse extends SupervisorMountBase {
    state: SupervisorMountState | null;
    user_path: string | null;
}
interface SupervisorNetworkMount extends SupervisorMountResponse {
    server: string;
    port?: number;
}
export interface SupervisorNFSMount extends SupervisorNetworkMount {
    type: SupervisorMountType.NFS;
    path: string;
}
export interface SupervisorCIFSMount extends SupervisorNetworkMount {
    type: SupervisorMountType.CIFS;
    share: string;
    version?: CIFSVersion | null;
}
export interface SupervisorDiskMount extends SupervisorMountResponse {
    type: SupervisorMountType.DISK;
    uuid: string;
    filesystem?: string;
}
export type SupervisorMount = SupervisorNFSMount | SupervisorCIFSMount | SupervisorDiskMount;
export type SupervisorNFSMountRequestParams = SupervisorNFSMount;
export interface SupervisorCIFSMountRequestParams extends SupervisorCIFSMount {
    username?: string;
    password?: string;
    version?: CIFSVersion | null;
}
interface SupervisorDiskMountRequestParamsBase {
    name: string;
    usage: SupervisorMountUsage;
    type: SupervisorMountType.DISK;
    read_only?: boolean;
}
export type SupervisorDiskMountRequestParams = (SupervisorDiskMountRequestParamsBase & {
    device: string;
    uuid?: string;
}) | (SupervisorDiskMountRequestParamsBase & {
    uuid: string;
    device?: string;
});
export type SupervisorMountRequestParams = SupervisorNFSMountRequestParams | SupervisorCIFSMountRequestParams | SupervisorDiskMountRequestParams;
export interface SupervisorMounts {
    default_backup_mount: string | null;
    mounts: SupervisorMount[];
}
export interface MountableDiskPartition {
    disk: HostDisk;
    partition: HostDiskPartition;
}
export declare const mountableDiskPartitions: (disks: HostDisk[]) => MountableDiskPartition[];
export declare const supervisorMountDescription: (mount: SupervisorMount) => string;
export declare const fetchSupervisorMounts: (callWS: HomeAssistant["callWS"]) => Promise<SupervisorMounts>;
export declare const createSupervisorMount: (callWS: HomeAssistant["callWS"], data: SupervisorMountRequestParams) => Promise<void>;
export declare const updateSupervisorMount: (callWS: HomeAssistant["callWS"], data: Partial<SupervisorMountRequestParams>) => Promise<void>;
export declare const removeSupervisorMount: (callWS: HomeAssistant["callWS"], name: string) => Promise<void>;
export declare const reloadSupervisorMount: (hass: HomeAssistant, data: SupervisorMount) => Promise<void>;
export declare const changeMountOptions: (hass: HomeAssistant, data: MountOptions) => Promise<void>;
export {};
