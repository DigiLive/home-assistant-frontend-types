import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-dialog";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { JoinBetaDialogParams } from "./show-dialog-join-beta";
export declare class DialogJoinBeta extends LitElement implements HassDialog<JoinBetaDialogParams> {
    hass: HomeAssistant;
    private _dialogParams?;
    private _open;
    showDialog(dialogParams: JoinBetaDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _cancel;
    private _join;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-join-beta": DialogJoinBeta;
    }
}
