import type { DeviceRegistryEntry } from "../../../../data/device/device_registry";
export interface DeviceAddToDialogParams {
    device: DeviceRegistryEntry;
    entityIds: string[];
    canCreateScene: boolean;
    addToDashboard: () => void;
}
export declare const loadDeviceAddToDialog: () => Promise<typeof import("./ha-device-add-to-dialog")>;
export declare const showDeviceAddToDialog: (element: HTMLElement, params: DeviceAddToDialogParams) => void;
