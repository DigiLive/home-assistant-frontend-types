import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-button-prev";
import "../../../../components/ha-relative-time";
import "../../../../components/ha-snap-bottom-sheet";
import "../../../../components/ha-spinner";
import "../../../../components/ha-state-icon";
import "../../../../components/ha-svg-icon";
import "../../../../components/item/ha-list-item-button";
import "../../../../components/list/ha-list-base";
import type { HaMapEntity } from "../../../../components/map/ha-map";
export type OverviewTab = "people" | "devices" | "zones";
declare global {
    interface HASSDomEvents {
        "map-overview-select": {
            entityId?: string;
        };
        "map-overview-tab": {
            tab: OverviewTab;
        };
        /**
         * Rendered size, so the host keeps controls and focused markers clear of
         * it. The phone sheet also sends the height markers are framed for, the
         * same at every position so moving the sheet never moves the map.
         */
        "map-overview-resize": {
            width: number;
            height: number;
            fitHeight?: number;
        };
    }
}
export declare class HuiMapOverview extends LitElement {
    entities: HaMapEntity[];
    selected?: string;
    tab: OverviewTab;
    private _states;
    private _i18n;
    private _formatters;
    private _connection;
    private _api;
    private _user?;
    private _config;
    private _entityReg;
    private _tabButtons;
    private _phone;
    private _phoneQuery;
    private _sheetMinHeight?;
    private _sheetPanel?;
    private _sheet?;
    private _peek?;
    private _detailName?;
    private _listItems;
    private _peekObserver?;
    private _observedPeek?;
    private _activity?;
    private _activityFailed;
    private _activityExpanded;
    private _activityRequest;
    private _resizeObserver?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handlePhoneChange;
    protected updated(changedProps: PropertyValues<this>): void;
    private _moveFocus;
    private _watchPeek;
    private _handleSheetResized;
    private _getPeople;
    private _isMe;
    private _personName;
    private _entityName;
    private _configuredNames;
    private _getDevices;
    private _getZones;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _activitySince;
    /** Resolves to null when history could not be loaded */
    private _fetchHistory;
    private _loadActivity;
    private _loadPersonActivity;
    private _loadZoneActivity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderDetail;
    private _zoneForState;
    private _zoneColor;
    private _renderTimeline;
    private _renderActivityEntry;
    private _showAllActivity;
    private _itemsPerTab;
    private _renderList;
    private _renderItems;
    private _renderEntity;
    private _renderZone;
    private _renderAvatar;
    private _renderZoneAvatar;
    private _handleTabClick;
    private _handleTabKeydown;
    private _handleItemClick;
    private _handleBack;
    private _handleSettings;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-map-overview": HuiMapOverview;
    }
}
