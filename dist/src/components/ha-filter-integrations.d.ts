import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "./ha-check-list-item";
import "./ha-domain-icon";
import "./ha-expansion-panel";
import "./ha-list";
import "./input/ha-input-search";
export declare class HaFilterIntegrations extends LitElement {
    value?: string[];
    narrow: boolean;
    expanded: boolean;
    private _i18n;
    private _localize;
    private _manifests?;
    private _manifestList;
    private _filter?;
    private _content;
    private _panel;
    protected render(): import("lit-html").TemplateResult<1>;
    private _expandedChanged;
    protected firstUpdated(): void;
    private _integrations;
    private _itemSelected;
    private _clearFilter;
    private _handleSearchChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-integrations": HaFilterIntegrations;
    }
}
