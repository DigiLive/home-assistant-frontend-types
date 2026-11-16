import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { ZeroconfDiscoveryInfoDialogParams } from "./show-dialog-zeroconf-discovery-info";
declare class DialogZeroconfDiscoveryInfo extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: ZeroconfDiscoveryInfoDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    private _copyToClipboard;
    protected render(): TemplateResult | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zeroconf-device-info": DialogZeroconfDiscoveryInfo;
    }
}
export {};
