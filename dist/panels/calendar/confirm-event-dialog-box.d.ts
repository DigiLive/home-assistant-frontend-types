import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-dialog";
import "../../components/ha-dialog-footer";
import "../../components/radio/ha-radio-group";
import "../../components/radio/ha-radio-option";
import type { HomeAssistant } from "../../types";
import type { ConfirmEventDialogBoxParams } from "./show-confirm-event-dialog-box";
declare class ConfirmEventDialogBox extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _closeState?;
    private _scope;
    showDialog(params: ConfirmEventDialogBoxParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderRecurrenceRange;
    private _scopeChanged;
    private _dismiss;
    private _confirm;
    private _dialogClosed;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "confirm-event-dialog-box": ConfirmEventDialogBox;
    }
}
export {};
