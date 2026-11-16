import type { AddToViewCardDialogParams } from "../add-entities-to-view";
export interface AddDeviceCardDialogParams extends AddToViewCardDialogParams {
    deviceId: string;
}
export declare const showAddDeviceCardDialog: (element: HTMLElement, addDeviceCardDialogParams: AddDeviceCardDialogParams) => void;
