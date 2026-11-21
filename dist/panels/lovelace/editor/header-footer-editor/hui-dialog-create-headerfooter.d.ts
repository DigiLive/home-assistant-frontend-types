import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-dialog";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { CreateHeaderFooterDialogParams } from "./show-create-headerfooter-dialog";
export declare class HuiCreateDialogHeaderFooter extends LitElement implements HassDialog<CreateHeaderFooterDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: CreateHeaderFooterDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleHeaderFooterPicked;
    private _ignoreKeydown;
    private _cancel;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-create-headerfooter": HuiCreateDialogHeaderFooter;
    }
}
