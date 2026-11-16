import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-icon";
import "./ha-icon-button";
import "./ha-label";
import "./ha-list";
import "./ha-list-item";
import "./input/ha-input-search";
export declare class HaFilterLabels extends LitElement {
    value?: string[];
    narrow: boolean;
    expanded: boolean;
    private _localize;
    private _i18n;
    private _labels?;
    private _filter?;
    private _content;
    private _panel;
    private _filteredLabels;
    protected render(): import("lit-html").TemplateResult<1>;
    private _manageLabels;
    private _expandedChanged;
    private _handleSearchChange;
    private _labelSelected;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-labels": HaFilterLabels;
    }
}
