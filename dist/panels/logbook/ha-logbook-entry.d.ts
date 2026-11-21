import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-icon-next";
import "../../components/ha-tooltip";
import type { LogbookEntry } from "../../data/logbook";
import type { HomeAssistant } from "../../types";
import type { LogbookNameDetail } from "./logbook-entry-model";
export interface LogbookEntrySelectedDetail {
    item: LogbookEntry;
}
declare global {
    interface HASSDomEvents {
        "logbook-entry-selected": LogbookEntrySelectedDetail;
    }
}
declare class HaLogbookEntry extends LitElement {
    hass: HomeAssistant;
    item: LogbookEntry;
    userIdToName: Record<string, string>;
    systemUserIds: Set<string>;
    noDetail: boolean;
    narrow: boolean;
    noIcon: boolean;
    graphColor: boolean;
    /** Overrides the node color, e.g. the color of the zone a person entered */
    nodeColor?: string;
    nameDetail?: LogbookNameDetail;
    firstOfDay: boolean;
    lastOfDay: boolean;
    showCause: boolean;
    private _computedStyle?;
    protected render(): TemplateResult<1>;
    private _rowClicked;
    private _rowKeydown;
    private _renderTrailing;
    private _renderCauseBadge;
    private _renderTimeline;
    private _renderList;
    private _renderCauseLine;
    private _renderInline;
    private _renderValue;
    private _entityName;
    private _formatMessageWithPossibleEntity;
    private _renderNode;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-logbook-entry": HaLogbookEntry;
    }
}
export {};
