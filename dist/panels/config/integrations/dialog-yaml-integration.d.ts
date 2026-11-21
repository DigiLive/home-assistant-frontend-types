import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { YamlIntegrationDialogParams } from "./show-add-integration-dialog";
import "../../../components/ha-button";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-svg-icon";
import "../../../components/ha-dialog";
export declare class DialogYamlIntegration extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: YamlIntegrationDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-yaml-integration": DialogYamlIntegration;
    }
}
