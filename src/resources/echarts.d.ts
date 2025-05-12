import * as echarts from "echarts/core";
import type { BarSeriesOption, LineSeriesOption, CustomSeriesOption, SankeySeriesOption } from "echarts/charts";
import type { TooltipComponentOption, DatasetComponentOption, LegendComponentOption, GridComponentOption, DataZoomComponentOption, VisualMapComponentOption } from "echarts/components";
import type { ComposeOption } from "echarts/core";
export type ECOption = ComposeOption<BarSeriesOption | LineSeriesOption | CustomSeriesOption | TooltipComponentOption | DatasetComponentOption | LegendComponentOption | GridComponentOption | DataZoomComponentOption | VisualMapComponentOption | SankeySeriesOption>;
export default echarts;
