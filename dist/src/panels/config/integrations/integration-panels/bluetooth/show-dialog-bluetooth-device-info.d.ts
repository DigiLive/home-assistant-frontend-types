import type { BluetoothDeviceData } from "../../../../../data/bluetooth";
export interface BluetoothDeviceInfoDialogParams {
    entry: BluetoothDeviceData;
    deviceId?: string;
}
export declare const loadBluetoothDeviceInfoDialog: () => Promise<typeof import("./dialog-bluetooth-device-info")>;
export declare const showBluetoothDeviceInfoDialog: (element: HTMLElement, bluetoothDeviceInfoDialogParams: BluetoothDeviceInfoDialogParams) => void;
