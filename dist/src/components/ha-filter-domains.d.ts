import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "./ha-check-list-item";
import "./ha-domain-icon";
import "./ha-expansion-panel";
import "./ha-list";
import "./input/ha-input-search";
export declare class HaFilterDomains extends LitElement {
    private _localize;
    private _states;
    private _i18n;
    value?: string[];
    narrow: boolean;
    expanded: boolean;
    private _filter?;
    private _content;
    private _panel;
    protected render(): import("lit-html").TemplateResult<1>;
    private _domains;
    private _expandedChanged;
    private _handleItemSelected;
    private _clearFilter;
    private _handleSearchChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-domains": HaFilterDomains;
    }
}
