import type { HomeAssistant } from "../types";
import type { ChatLogToolResult } from "./chat_log";
import type { ConversationResult } from "./conversation";
import type { SpeechMetadata } from "./stt";
export interface AssistPipeline {
    id: string;
    name: string;
    language: string;
    conversation_engine: string;
    conversation_language: string | null;
    prefer_local_intents: boolean;
    stt_engine: string | null;
    stt_language: string | null;
    tts_engine: string | null;
    tts_language: string | null;
    tts_voice: string | null;
    wake_word_entity: string | null;
    wake_word_id: string | null;
}
export interface AssistDevice {
    device_id: string;
    pipeline_entity: string | null;
}
export interface AssistPipelineMutableParams {
    name: string;
    language: string;
    conversation_engine: string;
    conversation_language: string | null;
    prefer_local_intents?: boolean;
    stt_engine: string | null;
    stt_language: string | null;
    tts_engine: string | null;
    tts_language: string | null;
    tts_voice: string | null;
    wake_word_entity: string | null;
    wake_word_id: string | null;
}
export interface AssistRunListing {
    pipeline_run_id: string;
    timestamp: string;
}
interface PipelineEventBase {
    timestamp: string;
}
interface PipelineRunStartEvent extends PipelineEventBase {
    type: "run-start";
    data: {
        pipeline: string;
        language: string;
        conversation_id: string;
        satellite_id?: string;
        runner_data: {
            stt_binary_handler_id: number | null;
            timeout: number;
        };
        tts_output?: {
            token: string;
            url: string;
            mime_type: string;
            stream_response: boolean;
        };
    };
}
interface PipelineRunEndEvent extends PipelineEventBase {
    type: "run-end";
    data: null;
}
interface PipelineErrorEvent extends PipelineEventBase {
    type: "error";
    data: {
        code: string;
        message: string;
    };
}
interface PipelineWakeWordStartEvent extends PipelineEventBase {
    type: "wake_word-start";
    data: {
        entity_id: string;
        metadata: Omit<SpeechMetadata, "language">;
        timeout: number;
    };
}
interface PipelineWakeWordEndEvent extends PipelineEventBase {
    type: "wake_word-end";
    data: {
        wake_word_output: {
            wake_word_id?: string;
            wake_word_phrase?: string;
            timestamp?: number | null;
        };
    };
}
interface PipelineSTTStartEvent extends PipelineEventBase {
    type: "stt-start";
    data: {
        engine: string;
        metadata: SpeechMetadata;
        audio_processing: {
            requires_external_vad: boolean;
            prefers_auto_gain_enabled: boolean;
            prefers_noise_reduction_enabled: boolean;
        };
    };
}
interface PipelineSTTVADStartEvent extends PipelineEventBase {
    type: "stt-vad-start";
    data: {
        timestamp: number;
    };
}
interface PipelineSTTVADEndEvent extends PipelineEventBase {
    type: "stt-vad-end";
    data: {
        timestamp: number;
    };
}
interface PipelineSTTEndEvent extends PipelineEventBase {
    type: "stt-end";
    data: {
        stt_output: {
            text: string;
        };
    };
}
interface PipelineIntentStartEvent extends PipelineEventBase {
    type: "intent-start";
    data: {
        engine: string;
        language: string;
        intent_input: string;
        conversation_id: string;
        device_id: string | null;
        satellite_id: string | null;
        prefer_local_intents: boolean;
    };
}
export interface ConversationChatLogAssistantDelta {
    role: "assistant";
    content: string;
    thinking_content?: string;
    tool_calls: {
        id: string;
        tool_name: string;
        tool_args: Record<string, unknown>;
        external: boolean;
    }[];
}
export interface ConversationChatLogToolResultDelta {
    role: "tool_result";
    agent_id: string;
    tool_call_id: string;
    tool_name: string;
    result: ChatLogToolResult;
    created: string;
}
interface PipelineIntentProgressEvent extends PipelineEventBase {
    type: "intent-progress";
    data: {
        tts_start_streaming?: boolean;
        chat_log_delta?: Partial<ConversationChatLogAssistantDelta> | ConversationChatLogToolResultDelta;
    };
}
interface PipelineIntentEndEvent extends PipelineEventBase {
    type: "intent-end";
    data: {
        processed_locally: boolean;
        intent_output: ConversationResult;
    };
}
interface PipelineTTSStartEvent extends PipelineEventBase {
    type: "tts-start";
    data: {
        engine: string;
        language: string | null;
        voice: string | null;
        tts_input: string;
        acknowledge_override: boolean;
    };
}
interface PipelineTTSEndEvent extends PipelineEventBase {
    type: "tts-end";
    data: {
        tts_output: {
            media_id: string;
            token: string;
            url: string;
            mime_type: string;
        };
    };
}
export type PipelineRunEvent = PipelineRunStartEvent | PipelineRunEndEvent | PipelineErrorEvent | PipelineWakeWordStartEvent | PipelineWakeWordEndEvent | PipelineSTTStartEvent | PipelineSTTVADStartEvent | PipelineSTTVADEndEvent | PipelineSTTEndEvent | PipelineIntentStartEvent | PipelineIntentProgressEvent | PipelineIntentEndEvent | PipelineTTSStartEvent | PipelineTTSEndEvent;
export type PipelineRunOptions = ({
    start_stage: "intent" | "tts";
    input: {
        text: string;
    };
} | {
    start_stage: "stt";
    input: {
        sample_rate: number;
    };
} | {
    start_stage: "wake_word";
    input: {
        sample_rate: number;
        timeout?: number;
        audio_seconds_to_buffer?: number;
    };
}) & {
    end_stage: "stt" | "intent" | "tts";
    pipeline?: string;
    conversation_id?: string | null;
};
export interface PipelineRun {
    init_options?: PipelineRunOptions;
    events: PipelineRunEvent[];
    stage: "ready" | "wake_word" | "stt" | "intent" | "tts" | "done" | "error";
    run: PipelineRunStartEvent["data"];
    error?: PipelineErrorEvent["data"];
    started: Date;
    finished?: Date;
    wake_word?: PipelineWakeWordStartEvent["data"] & Partial<PipelineWakeWordEndEvent["data"]> & {
        done: boolean;
    };
    stt?: PipelineSTTStartEvent["data"] & Partial<PipelineSTTEndEvent["data"]> & {
        done: boolean;
    };
    intent?: PipelineIntentStartEvent["data"] & Partial<PipelineIntentEndEvent["data"]> & {
        done: boolean;
    };
    tts?: PipelineTTSStartEvent["data"] & Partial<PipelineTTSEndEvent["data"]> & {
        done: boolean;
    };
}
export declare const processEvent: (run: PipelineRun | undefined, event: PipelineRunEvent, options?: PipelineRunOptions) => PipelineRun | undefined;
export declare const runDebugAssistPipeline: (hass: HomeAssistant, callback: (run: PipelineRun) => void, options: PipelineRunOptions) => Promise<() => Promise<void>>;
export declare const runAssistPipeline: (hass: Pick<HomeAssistant, "connection">, callback: (event: PipelineRunEvent) => void, options: PipelineRunOptions) => Promise<() => Promise<void>>;
export declare const listAssistPipelineRuns: (hass: HomeAssistant, pipeline_id: string) => Promise<{
    pipeline_runs: AssistRunListing[];
}>;
export declare const getAssistPipelineRun: (hass: HomeAssistant, pipeline_id: string, pipeline_run_id: string) => Promise<{
    events: PipelineRunEvent[];
}>;
export declare const listAssistPipelines: (callWS: HomeAssistant["callWS"]) => Promise<{
    pipelines: AssistPipeline[];
    preferred_pipeline: string | null;
}>;
export declare const getAssistPipeline: (hass: Pick<HomeAssistant, "callWS">, pipeline_id?: string) => Promise<AssistPipeline>;
export declare const createAssistPipeline: (hass: HomeAssistant, pipeline: AssistPipelineMutableParams) => Promise<AssistPipeline>;
export declare const updateAssistPipeline: (hass: HomeAssistant, pipeline_id: string, pipeline: AssistPipelineMutableParams) => Promise<AssistPipeline>;
export declare const setAssistPipelinePreferred: (hass: HomeAssistant, pipeline_id: string) => Promise<unknown>;
export declare const deleteAssistPipeline: (hass: HomeAssistant, pipelineId: string) => Promise<undefined>;
export declare const fetchAssistPipelineLanguages: (hass: HomeAssistant) => Promise<{
    languages: string[] | null;
}>;
export declare const listAssistDevices: (hass: HomeAssistant) => Promise<AssistDevice[]>;
export {};
