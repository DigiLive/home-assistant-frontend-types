import { LitElement } from "lit";
import type { EChartsType } from "echarts/core";
import "./ha-chart-base";
import "./ha-chart-tooltip-marker";
import "../ha-alert";
export interface Node {
    id: string;
    value: number;
    index: number;
    label?: string;
    color?: string;
    passThrough?: boolean;
    entityId?: string;
}
export interface Link {
    source: string;
    target: string;
    value?: number;
}
export interface SankeyChartData {
    nodes: Node[];
    links: Link[];
}
export declare class HaSankeyChart extends LitElement {
    data: SankeyChartData;
    vertical: boolean;
    showValues: boolean;
    valueFormatter?: (value: number) => string;
    chart?: EChartsType;
    private _currentZoom;
    private _sizeController;
    render(): import("lit-html").TemplateResult<1>;
    private _renderTooltip;
    private _handleChartSankeyRoam;
    private _handleChartClick;
    private _computeData;
    private _createData;
    private _processLinks;
    private _findParentIndex;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-sankey-chart": HaSankeyChart;
    }
    interface HASSDomEvents {
        "node-click": {
            node: Node;
        };
    }
}
