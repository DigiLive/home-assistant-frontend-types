import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { User } from "../../data/user";
import "../ha-icon-button";
import "./ha-user-picker";
declare class HaUsersPicker extends LitElement {
    label?: string;
    value?: string[];
    pickedUserLabel?: string;
    pickUserLabel?: string;
    users?: User[];
    disabled: boolean;
    private _localize;
    private _api;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _fetchUsers;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _notSelectedUsers;
    private _notSelectedUsersAndSelected;
    private get _currentUsers();
    private _updateUsers;
    private _userChanged;
    private _addUser;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-users-picker": HaUsersPicker;
    }
}
export {};
