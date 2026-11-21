import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-icon-button";
import "./ha-list";
export declare class HaFilterBlueprints extends LitElement {
    private _localize;
    private _api;
    value?: string[];
    type?: "automation" | "script";
    narrow: boolean;
    expanded: boolean;
    private _blueprints?;
    private _content;
    private _panel;
    private _relatedRequestId;
    willUpdate(properties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): Promise<void>;
    private _expandedChanged;
    private _blueprintsSelected;
    private _findRelated;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-blueprints": HaFilterBlueprints;
    }
}
