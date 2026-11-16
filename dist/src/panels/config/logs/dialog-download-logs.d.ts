import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-select";
import "../../../components/ha-dialog";
import type { HomeAssistant } from "../../../types";
import type { DownloadLogsDialogParams } from "./show-dialog-download-logs";
declare class DownloadLogsDialog extends LitElement {
    hass: HomeAssistant;
    private _dialogParams?;
    private _open;
    private _lineCount;
    showDialog(dialogParams: DownloadLogsDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _downloadLogs;
    private _setNumberOfLogs;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-download-logs": DownloadLogsDialog;
    }
}
export {};
