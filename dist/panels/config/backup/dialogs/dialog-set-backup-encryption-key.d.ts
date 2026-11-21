import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-icon-button";
import "../../../../components/item/ha-row-item";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { SetBackupEncryptionKeyDialogParams } from "./show-dialog-set-backup-encryption-key";
declare class DialogSetBackupEncryptionKey extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _open;
    private _step?;
    private _params?;
    private _newEncryptionKey?;
    private _copyContainer?;
    showDialog(params: SetBackupEncryptionKeyDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    private _done;
    private _nextStep;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderStepContent;
    private _copyKeyToClipboard;
    private _download;
    private _submit;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-set-backup-encryption-key": DialogSetBackupEncryptionKey;
    }
}
export {};
