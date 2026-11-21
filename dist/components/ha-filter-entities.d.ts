import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { RelatedResult } from "../data/search";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-list";
import "./ha-state-icon";
import "./input/ha-input-search";
export declare class HaFilterEntities extends LitElement {
    private _localize;
    private _states;
    private _formatters;
    private _i18n;
    private _api;
    value?: string[];
    type?: keyof RelatedResult;
    narrow: boolean;
    expanded: boolean;
    private _filter?;
    private _content;
    private _panel;
    private _relatedRequestId;
    willUpdate(properties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _keyFunction;
    private _renderItem;
    private _handleItemKeydown;
    private _handleItemClick;
    private _expandedChanged;
    private _handleSearchChange;
    private _entities;
    private _findRelated;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-entities": HaFilterEntities;
    }
}
