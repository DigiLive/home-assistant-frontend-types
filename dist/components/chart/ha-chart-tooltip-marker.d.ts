import type { PropertyValues } from "lit";
import { LitElement } from "lit";
declare class HaChartTooltipMarker extends LitElement {
    color: string;
    rtl: boolean;
    protected willUpdate(changed: PropertyValues): void;
    protected render(): symbol;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-chart-tooltip-marker": HaChartTooltipMarker;
    }
}
export {};
