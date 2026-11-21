import { LitElement, nothing } from "lit";
import "../../../components/ha-dialog";
import "../../../components/ha-spinner";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { LabsProgressDialogParams } from "./show-dialog-labs-progress";
export declare class DialogLabsProgress extends LitElement implements HassDialog<LabsProgressDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: LabsProgressDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _handleClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static readonly styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-labs-progress": DialogLabsProgress;
    }
}
