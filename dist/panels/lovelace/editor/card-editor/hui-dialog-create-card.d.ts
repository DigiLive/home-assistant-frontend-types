import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-paste-bar";
import "../../../../components/ha-tab-group";
import "../../../../components/ha-tab-group-tab";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "./hui-card-picker";
import "./hui-suggestion-picker";
import type { CreateCardDialogParams } from "./show-create-card-dialog";
export declare class HuiCreateDialogCard extends LitElement implements HassDialog<CreateCardDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _containerConfig;
    private _currTab;
    private _narrow;
    private _clipboard?;
    showDialog(params: CreateCardDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _containerPath;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderPasteBar;
    private _ignoreKeydown;
    static get styles(): CSSResultGroup;
    private _handleBrowseCards;
    private _handleSuggestionPicked;
    private _handleCardPicked;
    private _paste;
    private _editNewCard;
    private _handleTabChanged;
    private _cancel;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-create-card": HuiCreateDialogCard;
    }
}
