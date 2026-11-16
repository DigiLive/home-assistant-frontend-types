import type { TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { User } from "../../data/user";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "./ha-user-badge";
declare class HaUserPicker extends LitElement {
    label?: string;
    placeholder?: string;
    noUserLabel?: string;
    value: string;
    users?: User[];
    disabled: boolean;
    private _localize;
    private _api;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _fetchUsers;
    private usersMap;
    private _valueRenderer;
    private _rowRenderer;
    private _getUsers;
    private _getItems;
    protected render(): TemplateResult;
    private _valueChanged;
    private _notFoundLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-user-picker": HaUserPicker;
    }
}
export {};
