import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-paste-bar";
import "../../../../components/ha-tab-group";
import "../../../../components/ha-tab-group-tab";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "./hui-badge-picker";
import "./hui-badge-suggestion-picker";
import type { CreateBadgeDialogParams } from "./show-create-badge-dialog";
export declare class HuiCreateDialogBadge extends LitElement implements HassDialog<CreateBadgeDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _containerConfig;
    private _currTab;
    private _narrow;
    private _clipboard?;
    showDialog(params: CreateBadgeDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderPasteBar;
    private _ignoreKeydown;
    static get styles(): CSSResultGroup;
    private _handleBrowseBadges;
    private _handleSuggestionPicked;
    private _handleBadgePicked;
    private _paste;
    private _editNewBadge;
    private _handleTabChanged;
    private _cancel;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-create-badge": HuiCreateDialogBadge;
    }
}
