import type { EChartsType } from "echarts/core";
import { LitElement, nothing } from "lit";
import type { TopLevelFormatterParams } from "echarts/types/dist/shared";
import "./ha-chart-base";
import type { HomeAssistant } from "../../types";
export interface NetworkNode {
    id: string;
    name?: string;
    category?: number;
    label?: string;
    value?: number;
    symbolSize?: number;
    symbol?: string;
    itemStyle?: {
        color?: string;
        borderColor?: string;
        borderWidth?: number;
    };
    fixed?: boolean;
    /**
     * Distance from the center, where 0 is the center and 1 is the edge
     */
    polarDistance?: number;
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
    tooltipFormatter?: (params: TopLevelFormatterParams) => string;
    hass: HomeAssistant;
    private _reducedMotion;
    private _physicsEnabled;
    private _showLabels;
    private _listeners;
    private _nodePositions;
    private _baseChart?;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _createOptions;
    private _getSeries;
    private _togglePhysics;
    private _toggleLabels;
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
