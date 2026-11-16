import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { LogbookEntry } from "../../data/logbook";
import type { TraceContexts } from "../../data/trace";
import type { HomeAssistant } from "../../types";
import "./ha-logbook-entry";
import type { LogbookNameDetail } from "./logbook-entry-model";
declare global {
    interface HASSDomEvents {
        "hass-logbook-live": {
            enable: boolean;
        };
    }
}
declare class HaLogbookRenderer extends LitElement {
    hass: HomeAssistant;
    userIdToName: Record<string, string>;
    systemUserIds: Set<string>;
    traceContexts: TraceContexts;
    entries: LogbookEntry[];
    narrow: boolean;
    virtualize: boolean;
    noIcon: boolean;
    graphColor: boolean;
    showCause: boolean;
    noDetail: boolean;
    nameDetail?: LogbookNameDetail;
    private _savedScrollPos?;
    private _firstVisibleIndex;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getRenderRow;
    private _renderItem;
    private _handleEntrySelected;
    private _dayOf;
    private _formatDateHeader;
    private _saveScrollPos;
    private _visibilityChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-logbook-renderer": HaLogbookRenderer;
    }
}
export {};
