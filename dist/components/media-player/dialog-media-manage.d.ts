import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../ha-button";
import "../ha-check-list-item";
import "../ha-dialog";
import "../ha-dialog-footer";
import "../ha-dialog-header";
import "../ha-icon-button";
import "../ha-list";
import "../ha-spinner";
import "../ha-svg-icon";
import "../ha-tip";
import "./ha-media-upload-button";
import type { MediaManageDialogParams } from "./show-media-manage-dialog";
declare class DialogMediaManage extends LitElement {
    private _localize;
    private _hassioLoaded;
    private _api;
    private _currentItem?;
    private _params?;
    private _uploading;
    private _deleting;
    private _selected;
    private _open;
    private _filteredChildren;
    private _filesChanged;
    showDialog(params: MediaManageDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleSelected;
    private _startUploading;
    private _doneUploading;
    private _handleDeselectAll;
    private _handleSelectAll;
    private _handleDelete;
    private _refreshMedia;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-media-manage": DialogMediaManage;
    }
}
export {};
