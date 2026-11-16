import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { PipelineRunEvent } from "../../../../data/assist_pipeline";
import type { HomeAssistant } from "../../../../types";
import "./assist-render-pipeline-run";
import type { ChatLog } from "../../../../data/chat_log";
export declare class AssistPipelineEvents extends LitElement {
    hass: HomeAssistant;
    events: PipelineRunEvent[];
    chatLog?: ChatLog;
    private _processEvents;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-render-pipeline-events": AssistPipelineEvents;
    }
}
