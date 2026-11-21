import type { TooltipPositionCallback } from "echarts/types/dist/shared";
export declare const TOOLTIP_GAP_PX = 12;
export declare const TOOLTIP_TOP_OFFSET_PX = 10;
/**
 * Pins the tooltip near the top of the chart and offsets it horizontally
 * from the cursor so it never covers the data point being inspected.
 * For axis-trigger time-series tooltips where the cursor's Y is uncorrelated
 * with the displayed content.
 */
export declare const sideTooltipPosition: TooltipPositionCallback;
/**
 * Offsets the tooltip horizontally from the cursor and keeps it level with it.
 * For item-trigger tooltips where the cursor's row is what the tooltip shows.
 */
export declare const itemTooltipPosition: TooltipPositionCallback;
