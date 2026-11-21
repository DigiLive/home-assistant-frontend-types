import type { SerialPortUsage } from "../../../../../data/usb";
export interface SerialPortInfoDialogParams {
    port: SerialPortUsage;
}
export declare const loadSerialPortInfoDialog: () => Promise<typeof import("./dialog-serial-port-info")>;
export declare const showSerialPortInfoDialog: (element: HTMLElement, serialPortInfoDialogParams: SerialPortInfoDialogParams) => void;
