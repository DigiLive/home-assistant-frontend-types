import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../animation/ha-fade-in";
import "../ha-alert";
import "../ha-button";
import "../ha-checkbox";
import "../skeleton/ha-skeleton-icon";
import "../skeleton/ha-skeleton-text";
import "../ha-svg-icon";
import "../input/ha-input-search";
export interface RowClickedEvent {
    id: string;
}
export interface SelectionChangedEvent {
    value: string[];
}
export interface CollapsedChangedEvent {
    value: string[];
}
export interface SortingChangedEvent {
    column: string;
    direction: SortingDirection;
    link?: boolean;
}
export type SortingDirection = "desc" | "asc" | null;
export type DataTableColumnContainer<T = any> = Record<string, DataTableColumnData<T>>;
export interface DataTableSortColumnData {
    sortable?: boolean;
    filterable?: boolean;
    filterKey?: string;
    valueColumn?: string;
    direction?: SortingDirection;
    groupable?: boolean;
    urlName?: string;
    moveable?: boolean;
    hideable?: boolean;
    defaultHidden?: boolean;
    showNarrow?: boolean;
}
export interface DataTableColumnData<T = any> extends DataTableSortColumnData {
    main?: boolean;
    title: TemplateResult | string;
    label?: TemplateResult | string;
    type?: "numeric" | "ip" | "icon" | "icon-button" | "overflow" | "overflow-menu" | "flex";
    template?: (row: T) => TemplateResult | string | typeof nothing;
    extraTemplate?: (row: T) => TemplateResult | string | typeof nothing;
    minWidth?: string;
    maxWidth?: string;
    flex?: number;
    forceLTR?: boolean;
    hidden?: boolean;
    lastFixed?: boolean;
}
export type ClonedDataTableColumnData = Omit<DataTableColumnData, "title"> & {
    title?: TemplateResult | string;
};
export interface DataTableRowData {
    [key: string]: any;
    selectable?: boolean;
}
export type SortableColumnContainer = Record<string, ClonedDataTableColumnData>;
export type DataTableGroupActions = (group: string) => TemplateResult | typeof nothing;
export declare class HaDataTable extends LitElement {
    private _i18n?;
    narrow: boolean;
    columns: DataTableColumnContainer;
    data: DataTableRowData[];
    loading: boolean;
    selectable: boolean;
    clickable: boolean;
    /**
     * Add an extra row at the bottom of the data table
     * @type {TemplateResult}
     */
    appendRow?: any;
    autoHeight: boolean;
    id: string;
    noDataText?: string;
    /**
     * Error to show below the column headings, with a retry action, when loading the table's data failed.
     * Pass `true` to show the default message.
     */
    loadError?: boolean | string;
    searchLabel?: string;
    filter: string;
    groupColumn?: string;
    groupOrder?: string[];
    renderGroupActions?: DataTableGroupActions;
    sortColumn?: string;
    sortDirection: SortingDirection;
    initialCollapsedGroups?: string[];
    hiddenColumns?: string[];
    columnOrder?: string[];
    private _filterable;
    private _filter;
    private _filteredData?;
    private _filteredDataSourceLength;
    private _headerHeight;
    private _header;
    private _headerRow?;
    private _scroller?;
    private _stickyGroupHeader?;
    private _stickyGroupHeaderCell?;
    private _stickyGroupActions?;
    private _stickyGroup?;
    private _stickyGroupPosition;
    private _stickyGroupFrame?;
    private _resizeObserver;
    private _firstVisibleIndex;
    private _collapsedGroups;
    private _lastSelectedRowId;
    private _checkableRowsCount?;
    private _checkedRows;
    private _sortColumns;
    private _curRequest;
    private _lastUpdate;
    private _savedScrollPos?;
    private _debounceSearch;
    clearSelection(): void;
    selectAll(extraFilter?: (row: DataTableRowData) => boolean): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues<this>): void;
    willUpdate(properties: PropertyValues): void;
    private _memRenderRow;
    private _sortedColumns;
    protected render(): TemplateResult<1>;
    private _keyFunction;
    private _renderMainValue;
    private _countRows;
    private _renderRow;
    private _isColumnVisible;
    private _isSecondaryColumnVisible;
    private _hasCellValue;
    private _cellClasses;
    private _cellStyles;
    private _sortFilterData;
    private _groupData;
    private _renderGroupHeader;
    private _stopGroupToggle;
    private _memFilterData;
    private _handleHeaderClick;
    private _handleHeaderRowCheckboxClick;
    private _handleRowCheckboxClicked;
    private _selectRange;
    private _handleRowClick;
    private _setTitle;
    private _checkedRowsChanged;
    private _handleSearchChange;
    private _focusScroller;
    private _retryLoad;
    private _calcTableHeight;
    private _saveScrollPos;
    private _handleVisibilityChanged;
    private _scheduleStickyGroupUpdate;
    /**
     * The virtualizer positions rows absolutely, so `position: sticky` can't be
     * used. Instead, an overlay copy of the current group header is shown at the
     * top of the scroller, and the next group header slides under it. The
     * overlay doesn't move with the scroll, as browsers scroll off the main
     * thread and it would lag behind the rows.
     */
    private _updateStickyGroup;
    private _positionStickyGroupHeader;
    private _scrollContent;
    private _collapseStickyGroup;
    private _collapseGroup;
    expandAllGroups(): void;
    collapseAllGroups(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-data-table": HaDataTable;
    }
    interface HASSDomEvents {
        "retry-load": undefined;
        "selection-changed": SelectionChangedEvent;
        "row-click": RowClickedEvent;
        "sorting-changed": SortingChangedEvent;
        "collapsed-changed": CollapsedChangedEvent;
    }
}
