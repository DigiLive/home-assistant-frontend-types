import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-dialog";
import type { HomeAssistant } from "../../../types";
import "./integrations-startup-time";
declare class DialogIntegrationStartup extends LitElement {
    hass: HomeAssistant;
    private _open;
    showDialog(): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-integration-startup": DialogIntegrationStartup;
    }
}
export {};
