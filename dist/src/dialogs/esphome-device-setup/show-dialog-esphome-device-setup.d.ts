import type { ESPHomeDeviceCapabilities, ESPHomeDeviceWizard } from "../../data/esphome";
export declare const loadESPHomeDeviceSetupDialog: () => Promise<typeof import("./dialog-esphome-device-setup")>;
export interface ESPHomeDeviceSetupDialogParams {
    deviceId: string;
    deviceName?: string;
    capabilities?: ESPHomeDeviceCapabilities;
    wizard?: ESPHomeDeviceWizard;
    mediaPlayerSupported?: boolean;
    dialogClosedCallback?: () => void;
}
export declare const showESPHomeDeviceSetupDialog: (element: HTMLElement, dialogParams: ESPHomeDeviceSetupDialogParams) => void;
