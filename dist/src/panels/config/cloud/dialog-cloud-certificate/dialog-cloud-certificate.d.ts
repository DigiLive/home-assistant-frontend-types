import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-dialog-footer";
import type { HomeAssistant } from "../../../../types";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import type { CloudCertificateParams as CloudCertificateDialogParams } from "./show-dialog-cloud-certificate";
declare class DialogCloudCertificate extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: CloudCertificateDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-cloud-certificate": DialogCloudCertificate;
    }
}
export {};
