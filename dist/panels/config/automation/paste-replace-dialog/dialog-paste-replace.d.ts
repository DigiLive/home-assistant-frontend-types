import { type CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-dialog";
import "../../../../components/ha-yaml-editor";
import type { HomeAssistant } from "../../../../types";
import type { PasteReplaceDialogParams } from "./show-dialog-paste-replace";
declare class DialogPasteReplace extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _params;
    showDialog(params: PasteReplaceDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
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
