import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { ZWaveJSHardResetControllerDialogParams } from "./show-dialog-zwave_js-hard-reset-controller";
declare class DialogZWaveJSHardResetController extends LitElement {
    hass: HomeAssistant;
    private _entryId?;
    private _resetStatus;
    private _open;
    showDialog(params: ZWaveJSHardResetControllerDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _hardResetController;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-hard-reset-controller": DialogZWaveJSHardResetController;
    }
}
export {};
