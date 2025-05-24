import { type CSSResultGroup, LitElement, nothing } from "lit";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "../trigger/ha-automation-trigger-row";
import type { PasteReplaceDialogParams } from "./show-dialog-paste-replace";
declare class DialogPasteReplace extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _params;
    showDialog(params: PasteReplaceDialogParams): void;
    closeDialog(): boolean;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleReplace;
    private _handleAppend;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-paste-replace": DialogPasteReplace;
    }
}
export {};
