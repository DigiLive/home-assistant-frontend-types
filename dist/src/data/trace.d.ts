import type { Context, HomeAssistant } from "../types";
import type { BlueprintAutomationConfig, ManualAutomationConfig } from "./automation";
import type { BlueprintScriptConfig, ScriptConfig } from "./script";
interface BaseTraceStep {
    path: string;
    timestamp: string;
    error?: string;
    template_errors?: string[];
    changed_variables?: Record<string, unknown>;
}
export interface TriggerTraceStep extends BaseTraceStep {
    changed_variables: {
        trigger: {
            alias?: string | null;
            description?: string;
            [key: string]: unknown;
        };
        [key: string]: unknown;
    };
    result?: {
        reason: string;
        data?: Record<string, unknown>;
    };
}
export interface ConditionTraceStep extends BaseTraceStep {
    result?: {
        result: boolean | null;
    };
}
export interface CallServiceActionTraceStep extends BaseTraceStep {
    result?: {
        running_script: boolean;
        params: Record<string, unknown>;
    };
    child_id?: TraceId;
}
export interface ChooseActionTraceStep extends BaseTraceStep {
    result?: {
        choice: number | "default";
    };
}
export interface IfActionTraceStep extends BaseTraceStep {
    result?: {
        choice: "then" | "else";
    };
}
export interface StopActionTraceStep extends BaseTraceStep {
    result?: {
        stop: string;
        error: boolean;
    };
}
export interface WaitActionTraceStep extends BaseTraceStep {
    result?: {
        enabled?: boolean;
        wait?: {
            completed: boolean;
            remaining: number | null;
            trigger?: Record<string, unknown> | null;
        };
        timeout?: boolean;
    };
}
export interface DelayActionTraceStep extends BaseTraceStep {
    result?: {
        delay: number;
        done: boolean;
    };
}
export interface ChooseChoiceActionTraceStep extends BaseTraceStep {
    result?: {
        result: boolean;
    };
}
export type ActionTraceStep = BaseTraceStep | TriggerTraceStep | ConditionTraceStep | CallServiceActionTraceStep | ChooseActionTraceStep | IfActionTraceStep | StopActionTraceStep | WaitActionTraceStep | DelayActionTraceStep | ChooseChoiceActionTraceStep;
interface BaseTrace {
    domain: string;
    error?: string;
    item_id: string;
    last_step: string | null;
    run_id: string;
    state: "running" | "stopped" | "debugged";
    not_triggered?: boolean;
    timestamp: {
        start: string;
        finish: string | null;
    };
    script_execution: // The script was not executed because the automation's condition failed
    "failed_conditions" | "failed_single" | "failed_max_runs" | "finished" | "aborted" | "error" | "cancelled" | "not_triggered" | "disallowed_recursion_detected" | null;
}
interface BaseTraceExtended {
    trace: Record<string, ActionTraceStep[]>;
    context: Context;
}
export interface AutomationTrace extends BaseTrace {
    domain: "automation";
    trigger: string | null;
}
export interface AutomationTraceExtended extends AutomationTrace, BaseTraceExtended {
    config: ManualAutomationConfig;
    blueprint_inputs?: BlueprintAutomationConfig | null;
}
export interface ScriptTrace extends BaseTrace {
    domain: "script";
}
export interface ScriptTraceExtended extends ScriptTrace, BaseTraceExtended {
    config: ScriptConfig;
    blueprint_inputs?: BlueprintScriptConfig | null;
}
export type Trace = AutomationTrace | ScriptTrace;
export type TraceExtended = AutomationTraceExtended | ScriptTraceExtended;
interface TraceTypes {
    automation: {
        short: AutomationTrace;
        extended: AutomationTraceExtended;
    };
    script: {
        short: ScriptTrace;
        extended: ScriptTraceExtended;
    };
}
export declare const loadTrace: <T extends keyof TraceTypes>(hass: HomeAssistant, domain: T, item_id: string, run_id: string) => Promise<TraceTypes[T]["extended"]>;
export declare const loadTraces: <T extends keyof TraceTypes>(hass: HomeAssistant, domain: T, item_id: string) => Promise<TraceTypes[T]["short"][]>;
export interface TraceId {
    domain: string;
    item_id: string;
    run_id: string;
}
export declare const getTracePath: (domain: string, itemId: string) => string;
export declare const getTraceUrl: ({ domain, item_id, run_id }: TraceId) => string;
export type TraceContexts = Record<string, TraceId>;
export declare const loadTraceContexts: (hass: HomeAssistant, domain?: string, item_id?: string) => Promise<TraceContexts>;
export declare const getDataFromPath: (config: TraceExtended["config"], path: string) => any;
/**
 * Follows a trace path relative to a step config (for example
 * `choose/0/conditions/1`) and returns the deepest config it reaches. A
 * template condition written as a plain string is returned as that string.
 */
export declare const getNestedStepConfig: (config: unknown, path: string) => unknown;
/**
 * Returns the entity a condition trace step such as `entity_id/1` checked.
 * Core traces each entity of a condition with a list of entities separately.
 */
export declare const getTracedEntityId: (config: unknown, path: string) => string | undefined;
export declare const isTriggerPath: (path: string) => boolean;
export declare const getTriggerPathFromTrace: (steps: Record<string, BaseTraceStep[]>) => string | undefined;
export {};
