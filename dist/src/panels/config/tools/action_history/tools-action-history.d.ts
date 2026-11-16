import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/data-table/ha-data-table";
import "../../../../components/date-picker/ha-date-range-nav";
import "../../../../components/ha-alert";
import "../../../../components/ha-icon-button";
import "../../../../components/input/ha-input-search";
import type { HomeAssistant } from "../../../../types";
declare class HaPanelToolsActionHistory extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _range;
    private _calls;
    private _loading;
    private _error?;
    private _filter;
    private _userIdToName;
    private _systemUserIds;
    private _traceContexts;
    private _fetch?;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _rows;
    private _displayRows;
    private _columns;
    protected render(): import("lit-html").TemplateResult<1>;
    private _refresh;
    private _fetchUsers;
    private _dateRangeChanged;
    private _handleSearchChange;
    private _rowClicked;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "tools-action-history": HaPanelToolsActionHistory;
    }
}
export {};
