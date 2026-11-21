import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../ha-alert";
import "../ha-button";
import "../ha-dialog-footer";
import "../ha-dialog-header";
import "../ha-dialog";
import "./ha-media-player-toggle";
import type { JoinMediaPlayersDialogParams } from "./show-join-media-players-dialog";
declare class DialogJoinMediaPlayers extends LitElement {
    private _states;
    private _entities;
    private _localize;
    private _api;
    private _entityId?;
    private _groupMembers;
    private _selectedEntities;
    private _submitting?;
    private _error?;
    private _open;
    showDialog(params: JoinMediaPlayersDialogParams): void;
    protected willUpdate(changedProps: PropertyValues): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _mediaPlayerEntities;
    private _selectAll;
    private _handleSelectedChange;
    private _submit;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-join-media-players": DialogJoinMediaPlayers;
    }
}
export {};
