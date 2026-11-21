import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { MediaPlayerLayoutType } from "../../data/media-player";
import "../ha-dialog-header";
import "../ha-dropdown";
import "../ha-dropdown-item";
import "../ha-icon-button-arrow-prev";
import "../ha-dialog";
import "./ha-media-manage-button";
import "./ha-media-player-browse";
import type { MediaPlayerBrowseDialogParams } from "./show-media-browser-dialog";
declare class DialogMediaPlayerBrowse extends LitElement {
    private _localize;
    private _currentItem?;
    private _navigateIds?;
    private _params?;
    _preferredLayout: MediaPlayerLayoutType;
    private _open;
    private _browser;
    showDialog(params: MediaPlayerBrowseDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _dialogOpened;
    private _handleMenuAction;
    private _goBack;
    private _mediaBrowsed;
    private _mediaPicked;
    private get _action();
    private _refreshMedia;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-media-player-browse": DialogMediaPlayerBrowse;
    }
}
export {};
