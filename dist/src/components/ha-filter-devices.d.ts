import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { RelatedResult } from "../data/search";
import "./ha-expansion-panel";
import "./input/ha-input-search";
import "./item/ha-list-item-option";
import "./list/ha-list-selectable-virtualized";
export declare class HaFilterDevices extends LitElement {
    private _localize;
    private _devicesReg;
    private _i18n;
    private _api;
    value?: string[];
    type?: keyof RelatedResult;
    includeDisabledEntities: boolean;
    expanded: boolean;
    narrow: boolean;
    private _filter?;
    private _listElement?;
    private _content;
    private _panel;
    private _relatedRequestId;
    willUpdate(properties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderItem;
    private _handleAdded;
    private _handleRemoved;
    private _expandedChanged;
    private _handleSearchChange;
    private _handleSearchKeydown;
    private _devices;
    private _findRelated;
    private _handleClearFilterKeydown;
    private _clearFilter;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-devices": HaFilterDevices;
    }
}
