import type { UnsubscribeFunc } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare const enum ChatLogEventType {
    INITIAL_STATE = "initial_state",
    CREATED = "created",
    UPDATED = "updated",
    DELETED = "deleted",
    CONTENT_ADDED = "content_added"
}
export interface ChatLogAttachment {
    media_content_id: string;
    mime_type: string;
    path: string;
}
export interface ChatLogSystemContent {
    role: "system";
    content: string;
    created: Date;
}
export interface ChatLogUserContent {
    role: "user";
    content: string;
    created: Date;
    attachments?: ChatLogAttachment[];
}
export interface ChatLogAssistantContent {
    role: "assistant";
    agent_id: string;
    created: Date;
    content?: string;
    thinking_content?: string;
    tool_calls?: any[];
}
export interface ChatLogToolResult {
    data: Record<string, unknown>;
    error: boolean;
}
export interface ChatLogToolResultContent {
    role: "tool_result";
    agent_id: string;
    tool_call_id: string;
    tool_name: string;
    result: ChatLogToolResult;
    created: Date;
}
export type ChatLogContent = ChatLogSystemContent | ChatLogUserContent | ChatLogAssistantContent | ChatLogToolResultContent;
export interface ChatLog {
    conversation_id: string;
    continue_conversation: boolean;
    content: ChatLogContent[];
    created: Date;
}
export declare const subscribeChatLog: (hass: HomeAssistant, conversationId: string, callback: (chatLog: ChatLog | null) => void) => Promise<UnsubscribeFunc>;
export declare const subscribeChatLogIndex: (hass: HomeAssistant, callback: (chatLogs: ChatLog[]) => void) => Promise<UnsubscribeFunc>;
