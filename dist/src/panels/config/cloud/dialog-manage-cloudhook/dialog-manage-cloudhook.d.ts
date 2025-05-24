import "@material/mwc-button";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../types";
import type { WebhookDialogParams } from "./show-dialog-manage-cloudhook";
import "../../../../components/ha-copy-textfield";
export declare class DialogManageCloudhook extends LitElement {
    protected hass?: HomeAssistant;
    private _params?;
    showDialog(params: WebhookDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _disableWebhook;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-manage-cloudhook": DialogManageCloudhook;
    }
}
