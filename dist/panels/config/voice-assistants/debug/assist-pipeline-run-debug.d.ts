import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-assist-pipeline-picker";
import "../../../../components/ha-button";
import "../../../../components/ha-checkbox";
import "../../../../components/ha-secure-connection-alert";
import "../../../../components/input/ha-input";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
import "./assist-render-pipeline-run";
export declare class AssistPipelineRunDebug extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _pipelineRuns;
    private _continueConversationCheckbox;
    private _continueConversationTextField?;
    private _audioBuffer?;
    private _finished;
    private _pipelineId?;
    private _chatLog?;
    private _chatLogSubscription;
    protected render(): TemplateResult;
    disconnectedCallback(): void;
    private get conversationId();
    private _runTextPipeline;
    private _startRecorder;
    private _runAudioWakeWordPipeline;
    private _runAudioPipeline;
    private _doRunPipeline;
    private _sendAudioChunk;
    private _handleContinueKeyDown;
    private _clearConversation;
    private _downloadConversation;
    private _pipelinePicked;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pipeline-run-debug": AssistPipelineRunDebug;
    }
}
