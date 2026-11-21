import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "./ha-expansion-panel";
import "./ha-icon-button";
import "./ha-svg-icon";
import "./item/ha-list-item-option";
import "./list/ha-list-selectable";
import "./user/ha-user-badge";
export declare class HaFilterLogbookCauses extends LitElement {
    private _localize;
    private _i18n;
    private _states;
    private _formatters;
    value?: string[];
    expanded: boolean;
    private _list?;
    private _content;
    private _panel;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderContent;
    private _personUsers;
    private _expandedChanged;
    private _handleItemToggled;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-logbook-causes": HaFilterLogbookCauses;
    }
}
