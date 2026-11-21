import type { PipelineRunEvent } from "./assist_pipeline";
import type { ChatLogToolResult } from "./chat_log";
export interface AssistMessage {
    who: string;
    text: string;
    thinking: string;
    thinking_expanded?: boolean;
    tool_calls: Record<string, {
        tool_name: string;
        tool_args: Record<string, unknown>;
        result?: ChatLogToolResult;
    }>;
    error?: boolean;
}
export interface AssistMessageProcessor {
    readonly continueConversation: boolean;
    readonly hassMessage: AssistMessage;
    addMessage: () => void;
    setError: (error: string) => void;
    processEvent: (event: PipelineRunEvent) => void;
}
export declare const createAssistMessageProcessor: ({ addMessage, requestUpdate, }: {
    addMessage: (message: AssistMessage) => void;
    requestUpdate: () => void;
}) => AssistMessageProcessor;
