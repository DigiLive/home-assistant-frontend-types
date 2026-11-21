import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { BluetoothDeviceInfoDialogParams } from "./show-dialog-bluetooth-device-info";
declare class DialogBluetoothDeviceInfo extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: BluetoothDeviceInfoDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    showDataAsHex(bytestring: string): string;
    private _copyToClipboard;
    private _openDevice;
    protected render(): TemplateResult | typeof nothing;
    static readonly styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-bluetooth-device-info": DialogBluetoothDeviceInfo;
    }
}
export {};
