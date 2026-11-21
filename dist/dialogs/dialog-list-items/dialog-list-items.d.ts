import { LitElement, nothing } from "lit";
import "../../components/ha-bottom-sheet";
import "../../components/ha-dialog";
import "../../components/ha-icon";
import "../../components/ha-svg-icon";
import "../../components/item/ha-list-item-button";
import "../../components/list/ha-list-base";
import type { HomeAssistant } from "../../types";
import type { HassDialog } from "../make-dialog-manager";
import type { ListItemsDialogParams } from "./show-list-items-dialog";
export declare class ListItemsDialog extends LitElement implements HassDialog<ListItemsDialogParams> {
    hass?: HomeAssistant;
    private _params?;
    private _open;
    showDialog(params: ListItemsDialogParams): Promise<void>;
    closeDialog(_historyState?: any): boolean;
    private _dialogClosed;
    private _itemClicked;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-list-items": ListItemsDialog;
    }
}
