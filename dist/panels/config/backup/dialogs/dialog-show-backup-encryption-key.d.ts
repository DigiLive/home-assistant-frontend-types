import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-icon-button";
import "../../../../components/item/ha-row-item";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { ShowBackupEncryptionKeyDialogParams } from "./show-dialog-show-backup-encryption-key";
declare class DialogShowBackupEncryptionKey extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _open;
    private _params?;
    private _copyContainer?;
    showDialog(params: ShowBackupEncryptionKeyDialogParams): void;
    closeDialog(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _copyKeyToClipboard;
    private _download;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-show-backup-encryption-key": DialogShowBackupEncryptionKey;
    }
}
export {};
