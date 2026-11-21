import type { CustomSeriesOption, CustomSeriesRenderItem } from "echarts/types/dist/shared";
import type { HassEntities } from "home-assistant-js-websocket";
import type { TimelineEntity } from "../../data/history";
export interface StateHistoryChartTimelineDataParams {
    states: HassEntities;
    data: TimelineEntity[];
    startTime: Date;
    endTime: Date;
    names?: Record<string, string>;
    showNames: boolean;
    computedStyles: CSSStyleDeclaration;
    renderItem: CustomSeriesRenderItem;
    /** Chart width in device pixels; bounds how many rectangles are emitted. */
    chartWidth: number;
}
export interface TimelineSegment {
    state: string;
    locState: string | null;
    start: number;
    end: number;
}
/**
 * Bounds the rectangle count by the chart's pixel width. Segments at least one
 * frame wide are kept as they are; narrower ones are resolved per frame, and
 * neighbours resolving to the same state merge into one rectangle.
 */
export declare function downSampleTimelineSegments(segments: TimelineSegment[], frameMs: number): TimelineSegment[];
/**
 * Transforms processed history (`TimelineEntity[]`) into ECharts custom series
 * for `state-history-chart-timeline`. Pure data processing: all environment
 * inputs (theme style, entity states, chart width, the render callback) are injected so
 * the transform is deterministic and benchmarkable.
 */
export declare function generateStateHistoryChartTimelineData(params: StateHistoryChartTimelineDataParams): CustomSeriesOption[];
