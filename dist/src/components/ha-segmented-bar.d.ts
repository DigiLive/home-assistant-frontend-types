import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-tooltip";
export interface Segment {
    value: number;
    color: string;
    label?: TemplateResult | string;
    entityId?: string;
}
declare class HaSegmentedBar extends LitElement {
    segments: Segment[];
    heading: string;
    description?: string;
    hideLegend: boolean;
    hideTooltip: boolean;
    clickable: boolean;
    barClickable: boolean;
    hiddenSegments?: number[];
    protected render(): TemplateResult;
    private _handleSegmentClick;
    private _handleLegendClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-segmented-bar": HaSegmentedBar;
    }
    interface HASSDomEvents {
        "segment-clicked": {
            index: number;
            segment: Segment;
        };
        "legend-item-clicked": {
            index: number;
            segment: Segment;
        };
    }
}
export {};
