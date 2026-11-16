import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-dialog-footer";
import "../../components/ha-dialog";
import type { HomeAssistant } from "../../types";
import type { UpdateBackupDialogParams } from "./show-update-backup-dialog";
declare class DialogBox extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _closeState?;
    showDialog(params: UpdateBackupDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _no;
    private _yes;
    closeDialog(): void;
    private _dialogClosed;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-update-backup": DialogBox;
    }
}
export {};
