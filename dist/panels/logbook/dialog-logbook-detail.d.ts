import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-adaptive-dialog";
import "../../components/ha-alert";
import "../../components/ha-icon";
import "../../components/ha-icon-next";
import "../../components/ha-relative-time";
import "../../components/ha-spinner";
import "../../components/ha-svg-icon";
import "../../components/item/ha-list-item-base";
import "../../components/item/ha-list-item-button";
import "../../components/item/ha-list-item-value";
import "../../components/list/ha-grouped-list";
import type { HassDialog } from "../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../types";
import "./ha-logbook-chain";
import type { LogbookDetailDialogParams } from "./show-dialog-logbook-detail";
declare class DialogLogbookDetail extends LitElement implements HassDialog<LogbookDetailDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _chain?;
    private _previousState?;
    private _error;
    showDialog(params: LogbookDetailDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    private _loadDetails;
    private _fetchChain;
    private _fetchPreviousState;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderFacts;
    private _renderSubjectRow;
    private _renderSubjectIcon;
    private _entityClicked;
    private _renderWhatHappened;
    private _entryDate;
    private _transitionValues;
    private _moreInfoOpened;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-logbook-detail": DialogLogbookDetail;
    }
}
export {};
