import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { MediaPickedEvent, MediaPlayerBrowseAction, MediaPlayerItem, MediaPlayerLayoutType } from "../../data/media-player";
import "../entity/ha-entity-picker";
import "../ha-alert";
import "../ha-button";
import "../ha-card";
import "../ha-dropdown";
import "../ha-dropdown-item";
import "../ha-icon-button";
import "../ha-list";
import "../ha-list-item";
import "../input/ha-input-search";
import "./ha-media-browser-thumbnail";
import "../ha-spinner";
import "../ha-svg-icon";
import "../ha-tooltip";
import "./ha-browse-media-manual";
import "./ha-browse-media-tts";
declare global {
    interface HASSDomEvents {
        "media-picked": MediaPickedEvent;
        "media-browsed": {
            ids: MediaPlayerItemId[];
            current?: MediaPlayerItem;
            replace?: boolean;
        };
    }
}
export interface MediaPlayerItemId {
    media_content_id?: string | undefined;
    media_content_type?: string | undefined;
}
export declare class HaMediaPlayerBrowse extends LitElement {
    entityId?: string;
    action: MediaPlayerBrowseAction;
    preferredLayout: MediaPlayerLayoutType;
    dialog: boolean;
    navigateIds: MediaPlayerItemId[];
    accept?: string[];
    defaultId?: string;
    defaultType?: string;
    hideContentType: boolean;
    contentIdHelper?: string;
    narrow: boolean;
    scrolled: boolean;
    private _error?;
    private _parentItem?;
    private _currentItem?;
    private _searchQuery;
    private _filterQuery;
    private _searchResults?;
    private _searching;
    private _mediaClassFilter;
    private _i18n;
    private _haVersion?;
    private _api;
    private _states?;
    private _searchRequestId;
    private _header?;
    private _content?;
    private _virtualizer?;
    private _observed;
    private _headerOffsetHeight;
    private _resizeObserver?;
    private _initialReady;
    connectedCallback(): void;
    disconnectedCallback(): void;
    refresh(): Promise<void>;
    play(): void;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult<1>;
    private _renderSearchRow;
    private _renderFilterRow;
    private _renderMediaClassFilter;
    private _localizeMediaClass;
    private _toggleMediaClassFilter;
    private _handleSearchInput;
    private _handleFilterInput;
    private _handleSearchKeydown;
    private _abortSearch;
    private _clearSearch;
    private _search;
    private _renderGridItem;
    private _renderListItem;
    private _actionClicked;
    private _runAction;
    private _ttsPicked;
    private _manualPicked;
    private _childClicked;
    private _fetchData;
    private _manualItem;
    private _measureCard;
    private _attachResizeObserver;
    private _closeDialogAction;
    private _signalInitialReady;
    private _setError;
    private _renderError;
    private _setHeaderHeight;
    private _animateHeaderHeight;
    private _scroll;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-player-browse": HaMediaPlayerBrowse;
    }
}
