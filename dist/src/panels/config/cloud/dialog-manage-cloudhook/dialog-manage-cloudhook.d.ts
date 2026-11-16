import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-dialog-footer";
import type { HomeAssistant } from "../../../../types";
import type { WebhookDialogParams } from "./show-dialog-manage-cloudhook";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/input/ha-input-copy";
export declare class DialogManageCloudhook extends LitElement {
    protected hass?: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: WebhookDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _disableWebhook;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-manage-cloudhook": DialogManageCloudhook;
    }
}
