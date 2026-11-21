import { LitElement } from "lit";
import type { PropertyValues } from "lit";
import type { TraceExtended } from "../../data/trace";
import type { NodeInfo } from "../../data/trace-tree";
import "../ha-icon-button";
import "../ha-condition-icon";
import "../ha-service-icon";
import "../ha-trigger-icon";
import "./hat-graph-branch";
import "./hat-graph-node";
import "./hat-graph-spacer";
export type { NodeInfo };
declare global {
    interface HASSDomEvents {
        "graph-node-selected": NodeInfo;
    }
}
export declare class HatScriptGraph extends LitElement {
    private _localize;
    trace: TraceExtended;
    selected?: string;
    /** Accessible name per node path, from `buildTraceLabels`. */
    labels?: Record<string, string>;
    private _activeNode?;
    private _buildTree;
    get renderedNodes(): Record<string, NodeInfo>;
    get trackedNodes(): Record<string, NodeInfo>;
    private _selectNode;
    private _renderTrigger;
    private _typeRenderers;
    private _renderActionNode;
    private _renderBranchActions;
    private _renderChooseNode;
    private _renderIfNode;
    private _renderConditionNode;
    private _renderRepeatNode;
    private _renderServiceNode;
    private _renderWaitNode;
    private _renderSequenceNode;
    private _renderParallelNode;
    private _renderOtherNode;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues<this>): void;
    private _previousTrackedNode;
    private _nextTrackedNode;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-script-graph": HatScriptGraph;
    }
}
