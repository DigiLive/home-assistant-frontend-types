import type { EChartsType } from "echarts/core";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { TopLevelFormatterParams } from "echarts/types/dist/shared";
import "./ha-chart-base";
export interface NetworkNode {
    id: string;
    name?: string;
    context?: string;
    category?: number;
    value?: number;
    symbolSize?: number;
    symbol?: string;
    itemStyle?: {
        color?: string;
        borderColor?: string;
        borderWidth?: number;
    };
    label?: {
        position: "left" | "right" | "top" | "bottom";
    };
    fixed?: boolean;
    /**
     * Distance from the center, where 0 is the center and 1 is the edge
     */
    polarDistance?: number;
    x?: number;
    y?: number;
}
export interface NetworkLink {
    source: string;
    target: string;
    value?: number;
    reverseValue?: number;
    lineStyle?: {
        width?: number;
        color?: string;
        type?: "solid" | "dashed" | "dotted";
    };
    symbolSize?: number | number[];
    symbol?: string;
    label?: {
        show?: boolean;
        formatter?: string;
    };
    ignoreForceLayout?: boolean;
}
export interface NetworkData {
    nodes: NetworkNode[];
    links: NetworkLink[];
    categories?: {
        name: string;
        symbol: string;
    }[];
}
export declare class HaNetworkGraph extends LitElement {
    chart?: EChartsType;
    data: NetworkData;
    tooltipFormatter?: (params: TopLevelFormatterParams) => TemplateResult | typeof nothing | null;
    /**
     * Optional callback that returns additional searchable strings for a node.
     * These are matched against the search filter in addition to the node's name and context.
     */
    searchableAttributes?: (nodeId: string) => string[];
    searchFilter: string;
    /**
     * Id of a node to highlight. The view centers on it, zoomed so its neighbors
     * stay visible, and follows it until the user moves the view.
     */
    selectedNode?: string;
    private _localize;
    private _highlightedNodes?;
    private _reducedMotion;
    private _physicsEnabled?;
    private _showLabels;
    private _nodePositions;
    private _followSelectedNode;
    private _followedChart?;
    private _baseChart?;
    constructor();
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _createOptions;
    protected updated(changedProperties: PropertyValues<this>): void;
    private _nodeMatchesFilter;
    private _getSeries;
    private _getSeriesData;
    private _getPositionedNodes;
    private _positionNodeNeighbors;
    private _applyHighlighting;
    private _emphasisGuardHandler?;
    private _updateMouseoverHandler;
    private _updateFollowing;
    private _stopFollowing;
    private _handleGraphRoam;
    private _centerOnSelectedNode;
    disconnectedCallback(): void;
    private _togglePhysics;
    private _toggleLabels;
    private _saveNodePositions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-network-graph": HaNetworkGraph;
    }
    interface HASSDomEvents {
        "node-selected": {
            id: string;
        };
    }
}
