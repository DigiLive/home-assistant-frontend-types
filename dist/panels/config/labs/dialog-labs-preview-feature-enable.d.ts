import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-switch";
import "../../../components/item/ha-row-item";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { LabsPreviewFeatureEnableDialogParams } from "./show-dialog-labs-preview-feature-enable";
export declare class DialogLabsPreviewFeatureEnable extends LitElement implements HassDialog<LabsPreviewFeatureEnableDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _backupConfig?;
    private _createBackup;
    private _open;
    showDialog(params: LabsPreviewFeatureEnableDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _dialogClosed;
    private _fetchBackupConfig;
    private _fetchUpdateBackupConfig;
    private _computeCreateBackupTexts;
    private _createBackupChanged;
    private _handleCancel;
    private _handleConfirm;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static readonly styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-labs-preview-feature-enable": DialogLabsPreviewFeatureEnable;
    }
}
