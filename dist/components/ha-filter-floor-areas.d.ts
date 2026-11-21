import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { RelatedResult } from "../data/search";
import "./ha-expansion-panel";
import "./ha-floor-icon";
import "./ha-icon";
import "./ha-icon-button";
import "./ha-svg-icon";
import "./ha-tree-indicator";
import "./item/ha-list-item-option";
import "./list/ha-list-selectable";
export declare class HaFilterFloorAreas extends LitElement {
    private _localize;
    private _areasReg;
    private _floorsReg;
    private _i18n;
    private _api;
    value?: {
        floors?: string[];
        areas?: string[];
    };
    type?: keyof RelatedResult;
    includeDisabledEntities: boolean;
    narrow: boolean;
    expanded: boolean;
    private _list?;
    private _content;
    private _panel;
    private _relatedRequestId;
    willUpdate(properties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderArea;
    private _handleAdded;
    private _handleRemoved;
    private _expandedChanged;
    private _areas;
    private _findRelated;
    private _handleClearFilterKeydown;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-floor-areas": HaFilterFloorAreas;
    }
    interface HASSDomEvents {
        "data-table-filter-changed": {
            value: any;
            items: Set<string> | undefined;
        };
    }
}
