import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dialog";
import "../../../../../components/ha-qr-code";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../../types";
import type { MatterOpenCommissioningWindowDialogParams } from "./show-dialog-matter-open-commissioning-window";
declare class DialogMatterOpenCommissioningWindow extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status?;
    private _commissionParams?;
    private _open;
    private _sharing;
    private _shareFailed;
    private _shareExpired;
    private _shareAlert?;
    private _windowOpenedAt?;
    private _expiryTimer?;
    private _opening;
    showDialog(params: MatterOpenCommissioningWindowDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProperties: PropertyValues): void;
    private _start;
    private _scanPrompt;
    private _shareLabel;
    private _shareDevice;
    private _copyCode;
    closeDialog(): void;
    private _dialogClosed;
    private _resetWindow;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-open-commissioning-window": DialogMatterOpenCommissioningWindow;
    }
}
export {};
