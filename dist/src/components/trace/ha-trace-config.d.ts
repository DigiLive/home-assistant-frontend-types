import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-code-editor";
import "../ha-icon-button";
import type { TraceExtended } from "../../data/trace";
export declare class HaTraceConfig extends LitElement {
    trace: TraceExtended;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-config": HaTraceConfig;
    }
}
