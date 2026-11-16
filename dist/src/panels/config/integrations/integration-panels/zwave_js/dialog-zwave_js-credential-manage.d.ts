import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dropdown";
import "../../../../../components/ha-dropdown-item";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/item/ha-list-item-button";
import "../../../../../components/list/ha-list-base";
import type { HomeAssistant } from "../../../../../types";
import type { ZwaveCredentialManageDialogParams } from "./show-dialog-zwave_js-credential-manage";
declare class DialogZwaveCredentialManage extends LitElement {
    hass: HomeAssistant;
    private _entityId?;
    private _capabilities?;
    private _users;
    private _loading;
    private _busy;
    private _open;
    showDialog(params: ZwaveCredentialManageDialogParams): Promise<void>;
    private _fetchData;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleMenuAction;
    private _renderUsers;
    private _userFromEvent;
    private _handleUserClick;
    private _handleDeleteUserClick;
    private _addUser;
    private _editUser;
    private _deleteUser;
    private _deleteAllUsers;
    closeDialog(): void;
    private _dialogClosed;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-credential-manage": DialogZwaveCredentialManage;
    }
}
export {};
