import "@material/mwc-linear-progress/mwc-linear-progress";
import { LitElement, nothing } from "lit";
import "../../components/ha-dialog-header";
import "../../components/ha-icon-button";
import "../../components/ha-items-display-editor";
import "../../components/ha-md-dialog";
import type { HomeAssistant } from "../../types";
import type { EditSidebarDialogParams } from "./show-dialog-edit-sidebar";
declare class DialogEditSidebar extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _dialog?;
    private _order;
    private _hidden;
    private _saveCallback?;
    showDialog(params: EditSidebarDialogParams): Promise<void>;
    private _dialogClosed;
    closeDialog(): void;
    private _panels;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _changed;
    private _save;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-edit-sidebar": DialogEditSidebar;
    }
}
export {};
