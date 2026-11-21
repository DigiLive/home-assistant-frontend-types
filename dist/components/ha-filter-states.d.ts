import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-icon";
import "./ha-icon-button";
import "./ha-list";
export declare class HaFilterStates extends LitElement {
    label?: string;
    value?: string[];
    states?: {
        value: any;
        label?: string;
        icon?: string;
    }[];
    narrow: boolean;
    expanded: boolean;
    private _content;
    private _panel;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _expandedChanged;
    private _statesSelected;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-states": HaFilterStates;
    }
}
