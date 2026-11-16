import type { EChartsType } from "echarts/core";
import { LitElement, nothing } from "lit";
import "./ha-chart-base";
import "./ha-chart-tooltip-marker";
export interface SunburstNode {
    id: string;
    name?: string;
    value: number;
    itemStyle?: {
        color?: string;
    };
    children?: SunburstNode[];
}
export declare class HaSunburstChart extends LitElement {
    data?: SunburstNode;
    valueFormatter?: (value: number) => string;
    chart?: EChartsType;
    constructor();
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderTooltip;
    private _createData;
    private _getMaxDepth;
    private _generateLevels;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-sunburst-chart": HaSunburstChart;
    }
}
