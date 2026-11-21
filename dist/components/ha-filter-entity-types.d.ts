import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "./ha-domain-icon";
import "./ha-expansion-panel";
import "./ha-icon-button";
import "./ha-svg-icon";
import "./ha-tree-indicator";
import "./input/ha-input-search";
import "./item/ha-list-item-option";
import "./list/ha-list-selectable";
export declare class HaFilterEntityTypes extends LitElement {
    private _localize;
    private _states;
    private _i18n;
    value?: string[];
    expanded: boolean;
    private _filter?;
    private _expandedDomains;
    private _list?;
    private _content;
    private _panel;
    private _badgeTypes?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderContent;
    private _renderRow;
    private _types;
    private _count;
    private _rows;
    private _matches;
    private _isSelected;
    private _isPartiallySelected;
    willUpdate(changed: PropertyValues<this>): void;
    private _expandedChanged;
    private _handleChevronKeydown;
    private _toggleDomain;
    private _handleItemToggled;
    private _clearFilter;
    private _handleSearchChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-entity-types": HaFilterEntityTypes;
    }
}
