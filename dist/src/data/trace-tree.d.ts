import { getAutomationActionType } from "./action";
import type { Condition, Trigger } from "./automation";
import type { Action, Option } from "./script";
import type { TraceExtended } from "./trace";
export type TraceNodeType = "trigger" | "condition" | "action" | "chooseOption";
export type TraceActionNodeType = Exclude<ReturnType<typeof getAutomationActionType>, undefined> | "other";
export interface NodeInfo {
    path: string;
    config: unknown;
    type?: TraceNodeType;
}
export interface TraceNode<T = unknown> {
    path: string;
    config: T;
    type: TraceNodeType;
    /** Data fact: the path (or branch) was tracked by Core. */
    hasTrace: boolean;
    /** Visual execution state (triggers mask not-triggered, conditions use outcome). */
    track: boolean;
    error: boolean;
    /** Own `enabled === false` or inherited from an ancestor action. */
    disabled: boolean;
    notTriggered?: boolean;
    condition?: {
        executed: boolean;
        passed: boolean;
        failed: boolean;
    };
}
export interface TraceActionNode<T extends Action = Action> extends TraceNode<T> {
    actionType: TraceActionNodeType;
    branches: TraceBranch[];
    iterations?: number;
    badge?: number;
}
export interface TraceBranch {
    path: string;
    children: TraceActionNode[];
    hasTrace: boolean;
    finished: boolean;
    unfinished: boolean;
    disabled: boolean;
    option?: Option;
}
/** The automation's triggers, flattened like the trace paths count them. */
export declare const getTraceTriggers: (config: TraceExtended["config"]) => Trigger[] | undefined;
/** Configuration-shaped tree annotated with the execution tracked by Core. */
export declare class TraceTree {
    readonly trace: TraceExtended;
    readonly triggers?: TraceNode<Trigger>[];
    readonly conditions: TraceNode<Condition>[];
    readonly actions: TraceActionNode[];
    readonly sequence: TraceActionNode[];
    /** All selectable nodes in render order, keyed by path. */
    readonly renderedNodes: Record<string, NodeInfo>;
    /**
     * Selectable nodes that were tracked, sorted in trace order. Includes
     * not-triggered triggers so they remain navigable, even though their
     * `track` is false and they do not render as part of the executed path.
     */
    readonly trackedNodes: Record<string, NodeInfo>;
    readonly trackedPaths: string[];
    constructor(trace: TraceExtended);
    get firstTracked(): NodeInfo | undefined;
    getNode(path: string): NodeInfo | undefined;
    previousTracked(path: string): NodeInfo | undefined;
    nextTracked(path: string): NodeInfo | undefined;
    private _base;
    private _triggerNode;
    private _conditionNode;
    private _actions;
    private _branch;
    /** Build an action subtree, retaining the original config for selection. */
    private _actionNode;
    private _indexNodes;
    private _hasTracedSteps;
    private _branchFinished;
    private _actionFinished;
    private _hasContinuedAfter;
}
