import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-spinner";
import "../../../../components/ha-yaml-editor";
import type { PipelineRun } from "../../../../data/assist_pipeline";
import type { ChatLog } from "../../../../data/chat_log";
import type { HomeAssistant } from "../../../../types";
export declare class AssistPipelineDebug extends LitElement {
    hass: HomeAssistant;
    pipelineRun: PipelineRun;
    chatLog?: ChatLog;
    private _audioElement?;
    private get _isPlaying();
    protected render(): TemplateResult;
    private _playTTS;
    private _stopTTS;
    disconnectedCallback(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-render-pipeline-run": AssistPipelineDebug;
    }
}
