import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-icon-next";
import "../../components/ha-state-icon";
import "../../components/ha-svg-icon";
import type { LogbookEntry } from "../../data/logbook";
import type { TraceContexts } from "../../data/trace";
import type { HomeAssistant } from "../../types";
import type { LogbookChain } from "./logbook-chain-resolver";
declare class HaLogbookChain extends LitElement {
    hass: HomeAssistant;
    chain: LogbookChain;
    subject: LogbookEntry;
    traceContexts: TraceContexts;
    protected render(): TemplateResult<1>;
    private _renderRow;
    private _renderTraceLink;
    private _renderSyntheticRunNode;
    private _renderOriginNode;
    private _actionUsedText;
    private _renderOriginIcon;
    private _formatTimeWithMs;
    private _renderRunNode;
    private _renderEffectNode;
    private _entityClicked;
    private _rowKeydown;
    private _traceClicked;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-logbook-chain": HaLogbookChain;
    }
}
export {};
