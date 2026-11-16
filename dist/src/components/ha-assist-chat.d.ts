import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import { type AssistPipeline } from "../data/assist_pipeline";
import "./ha-alert";
import "./ha-markdown";
import "./input/ha-input";
export declare const initialPromptToSubmit: (prompt: string | undefined, submit: boolean) => string | undefined;
export declare const assistPipelineChanged: (previous: AssistPipeline | undefined, current: AssistPipeline | undefined) => boolean;
export declare const greetingTranslationLanguage: (pipelineLanguage: string | undefined, interfaceLanguage: string | undefined) => string | undefined;
export declare class HaAssistChat extends LitElement {
    pipeline?: AssistPipeline;
    disableSpeech: boolean;
    startListening?: boolean;
    initialPrompt?: string;
    submitInitialPrompt: boolean;
    private _messageInput;
    private _lastChatMessage?;
    private _lastChatMessageImage;
    private _conversation;
    private _showSendButton;
    private _processing;
    private _localize;
    private _language;
    private _states;
    private _config;
    private _connection;
    private _conversationId;
    private _greetingLoadToken;
    private _initialPromptSubmitted;
    private _audioRecorder?;
    private _audioBuffer?;
    private _audio?;
    private _stt_binary_handler_id?;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _loadGreeting;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _scrollMessagesBottom;
    private _handleKeyUp;
    private _handleInput;
    private _handleSendMessage;
    private _handleListeningButton;
    private _toggleListening;
    private _handleToggleThinking;
    private _addMessage;
    private _showNotSupportedMessage;
    private _startListening;
    private _stopListening;
    private _sendAudioChunk;
    private _unloadAudio;
    private _processText;
    private _createAddHassMessageProcessor;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-assist-chat": HaAssistChat;
    }
}
