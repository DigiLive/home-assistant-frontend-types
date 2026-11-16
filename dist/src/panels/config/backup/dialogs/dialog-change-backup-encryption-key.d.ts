import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-button-prev";
import "../../../../components/item/ha-row-item";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { ChangeBackupEncryptionKeyDialogParams } from "./show-dialog-change-backup-encryption-key";
declare class DialogChangeBackupEncryptionKey extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _open;
    private _step?;
    private _params?;
    private _newEncryptionKey?;
    private _copyContainer?;
    showDialog(params: ChangeBackupEncryptionKeyDialogParams): void;
    closeDialog(): boolean;
    private _done;
    private _previousStep;
    private _nextStep;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderStepContent;
    private _copyKeyToClipboard;
    private _copyOldKeyToClipboard;
    private _downloadOld;
    private _downloadNew;
    private _submit;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-change-backup-encryption-key": DialogChangeBackupEncryptionKey;
    }
}
export {};
