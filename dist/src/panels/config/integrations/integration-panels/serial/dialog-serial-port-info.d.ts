import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-adaptive-dialog";
import "../../../../../components/ha-icon-button";
import "../../../../../components/item/ha-list-item-value";
import "../../../../../components/list/ha-grouped-list";
import type { HomeAssistant } from "../../../../../types";
import type { SerialPortInfoDialogParams } from "./show-dialog-serial-port-info";
declare class DialogSerialPortInfo extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: SerialPortInfoDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    private _copyToClipboard;
    private _fields;
    protected render(): TemplateResult | typeof nothing;
    static readonly styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-serial-port-info": DialogSerialPortInfo;
    }
}
export {};
