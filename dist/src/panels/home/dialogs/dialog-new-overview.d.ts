import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-dialog";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { NewOverviewDialogParams } from "./show-dialog-new-overview";
export declare class DialogNewOverview extends LitElement implements HassDialog<NewOverviewDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: NewOverviewDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-new-overview": DialogNewOverview;
    }
}
