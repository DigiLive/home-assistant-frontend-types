import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../../types";
import type { SSDPDiscoveryInfoDialogParams } from "./show-dialog-ssdp-discovery-info";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dialog";
declare class DialogSSDPDiscoveryInfo extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: SSDPDiscoveryInfoDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    private _copyToClipboard;
    private _showRawData;
    protected render(): TemplateResult | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-ssdp-device-info": DialogSSDPDiscoveryInfo;
    }
}
export {};
