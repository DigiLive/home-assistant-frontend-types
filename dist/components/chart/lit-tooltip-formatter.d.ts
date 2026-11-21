import type { LitTooltipFormatter } from "../../resources/echarts/echarts";
type WrappedTooltipFormatter = (params: unknown, ticket?: string) => HTMLElement | null;
export type { WrappedTooltipFormatter };
export declare const wrapLitTooltipFormatter: (fn: LitTooltipFormatter | WrappedTooltipFormatter) => WrappedTooltipFormatter;
