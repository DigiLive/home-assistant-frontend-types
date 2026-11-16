import type { HomeAssistant } from "../types";
/** Claim the session of this tab ahead of time, so commands do not wait. */
export declare const prepareDebugConsoleSession: (userId: string) => void;
/** Return if the user has to accept the warning before using the console. */
export declare const getDebugConsoleInfo: (hass: Pick<HomeAssistant, "callWS">) => Promise<{
    warning_required: boolean;
}>;
export declare const acceptDebugConsoleWarning: (hass: Pick<HomeAssistant, "callWS">) => Promise<unknown>;
export type DebugConsoleValue = {
    type: "none";
} | {
    type: "boolean";
    value: boolean;
} | {
    type: "number";
    value: string;
} | {
    type: "string";
    value: string;
    truncated: boolean;
} | {
    type: "text";
    value: string;
    truncated: boolean;
} | {
    type: "object";
    class: string;
    preview: string;
    /** Unique per backend session, so stale IDs never find another object. */
    object_id: string;
    length?: number;
};
export interface DebugConsoleExecuteResult {
    logs?: DebugConsoleValue[][];
    /** Set when the code printed more lines than the console keeps. */
    logs_truncated?: boolean;
    result?: DebugConsoleValue | null;
    error?: string;
}
export type DebugConsoleChild = {
    key: string;
    value: DebugConsoleValue;
} | {
    key: string;
    getter: true;
};
/**
 * Looks into objects of the console, for components that do not hold the
 * hass object.
 */
export interface DebugConsoleObjects {
    inspect(objectId: string): Promise<DebugConsoleInspectResult>;
    getAttribute(objectId: string, attribute: string): Promise<DebugConsoleGetAttributeResult>;
}
export interface DebugConsoleInspectResult {
    children: DebugConsoleChild[];
    truncated: boolean;
}
export type DebugConsoleGetAttributeResult = {
    value: DebugConsoleValue;
} | {
    error: string;
};
export declare const executeDebugConsole: (hass: HomeAssistant, code: string) => Promise<DebugConsoleExecuteResult>;
/** Return if code needs more input before it runs, like in the Python REPL. */
export declare const checkDebugConsoleInput: (hass: Pick<HomeAssistant, "callWS">, code: string) => Promise<{
    incomplete: boolean;
}>;
/** Stop the code this tab is running, which then answers it stopped. */
export declare const stopDebugConsole: (hass: HomeAssistant) => Promise<unknown>;
export declare const inspectDebugConsole: (hass: HomeAssistant, objectId: string) => Promise<DebugConsoleInspectResult>;
export declare const getDebugConsoleAttribute: (hass: HomeAssistant, objectId: string, attribute: string) => Promise<DebugConsoleGetAttributeResult>;
export interface DebugConsoleCompleteResult {
    /** The part of the line the matches complete. */
    token: string;
    matches: string[];
}
/** Complete the code being typed, which is the text up to the cursor. */
export declare const completeDebugConsole: (hass: HomeAssistant, code: string) => Promise<DebugConsoleCompleteResult>;
export interface DebugConsoleSignature {
    name: string;
    parameters: string[];
    /** Index of the parameter the argument being typed goes to. */
    active: number | null;
    returns: string | null;
    doc: string;
}
/** Return the signature of the call the code up to the cursor is in. */
export declare const getDebugConsoleSignature: (hass: HomeAssistant, code: string) => Promise<{
    signature: DebugConsoleSignature | null;
}>;
export declare const clearDebugConsole: (hass: HomeAssistant) => Promise<unknown>;
