import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-code-editor";
import "../ha-icon-button";
import type { TraceExtended } from "../../data/trace";
export declare class HaTraceBlueprintConfig extends LitElement {
    trace: TraceExtended;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-blueprint-config": HaTraceBlueprintConfig;
    }
}
