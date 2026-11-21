import type { HassConfig } from "home-assistant-js-websocket";
import type { BarSeriesOption, LineSeriesOption } from "echarts/types/dist/shared";
import type { FrontendLocaleData } from "../../../../../data/translation";
import type { HaECOption } from "../../../../../resources/echarts/echarts";
import type { StatisticPeriod } from "../../../../../data/recorder";
import "../../../../../components/chart/ha-chart-tooltip-marker";
export { fillDataGapsAndRoundCaps } from "../../../../../components/chart/round-caps";
/**
 * Energy chart data point tuple:
 * [0] displayX  - bar position (midpoint for sub-daily periods, start otherwise)
 * [1] value     - the energy value
 * [2] originalStart - original period start timestamp, used for tooltips
 */
export type EnergyDataPoint = [
    displayX: number,
    value: number,
    originalStart: number
];
export declare function getSuggestedMax(period: StatisticPeriod, end: Date, noRounding: boolean): Date;
export declare function getCommonOptions(start: Date, end: Date, locale: FrontendLocaleData, config: HassConfig, unit?: string, compareStart?: Date, compareEnd?: Date, formatTotal?: (total: number) => string, detailedDailyData?: boolean, yAxisFractionDigits?: number, getSeriesArea?: (seriesId: string) => string | undefined): HaECOption;
/**
 * Sum of a series' y values over the displayed period, formatted for the
 * legend (e.g. "1.2 kWh"). Returns undefined when the series has no data.
 */
export declare function formatSeriesTotal(series: BarSeriesOption | LineSeriesOption | undefined, locale: FrontendLocaleData, unit: string): string | undefined;
export declare function fillLineGaps(datasets: LineSeriesOption[]): LineSeriesOption[];
/**
 * Compute the display x-position for an energy bar chart data point.
 * For sub-daily periods (hour/5minute), returns the midpoint to center bars
 * between ticks. For daily or longer periods, returns the start timestamp.
 */
export declare function computeStatMidpoint(start: number, end: number, period: string, compareTransform?: (ts: Date) => Date): number;
/**
 * Offset from a period's start to its midpoint, for centering sub-daily bars
 * (and forecast lines) between axis ticks — 0 for daily+ periods, which sit at
 * the start.
 *
 * `measuredGap` is the gap between the first two entries, when available. It
 * adapts the offset to data that is finer-grained than the nominal period
 * (e.g. external forecast data), but is clamped to the nominal period so
 * sparse data (gaps between readings) can't inflate the offset, and a lone
 * bucket (no gap to measure) still centers on the nominal midpoint.
 */
export declare function getPeriodMidpointOffset(period: string, measuredGap?: number): number;
/**
 * Generate the expected statistics-bucket grid across [start, end) so sparse
 * data can be zero-filled. Without a dense grid, ECharts derives the bar band
 * width from the minimum gap between data points: sparse data yields
 * oversized bars, and a single point makes ECharts expand the time axis by
 * ±40% of its span, ignoring the configured min/max.
 *
 * The grid is anchored on a real data bucket rather than on `start`: recorder
 * buckets are UTC-aligned, so in half-hour timezones they don't sit on local
 * period boundaries. Stepping from a real bucket keeps generated buckets
 * exactly on the data's grid (midpoints for sub-daily periods, period starts
 * otherwise). A non-compare series is preferred so the grid aligns with the
 * main data; a compare series is only used as a fallback so a compare-only
 * view — e.g. today has no data yet but the compare period does — still gets
 * zero-filled instead of leaving a lone bar that expands the axis. Returns an
 * empty array when there is no data to anchor on.
 */
export declare function generateFillBuckets(datasets: BarSeriesOption[], start: Date, end: Date, period: "5minute" | "hour" | "day" | "month"): number[];
export interface UntrackedSplit {
    /** Untracked consumption per timestamp, clamped to >= 0. */
    positive: Record<number, number>;
    /** Negative untracked per timestamp — only timestamps where the raw value
     * was below zero (tracked devices reported more than total consumption). */
    negative: Record<number, number>;
}
/**
 * Split untracked energy consumption into positive and negative parts per
 * timestamp.
 *
 * Untracked is `used_total - sum(tracked device consumption)`. It can go
 * negative when meters report at coarser resolution than device sensors
 * (e.g. an integer-kWh grid meter vs fractional device sensors). The positive
 * part is the genuine untracked consumption; the negative part is surfaced as
 * a separate, toggleable series so users can hide it without losing it as a
 * diagnostic signal.
 */
export declare function splitUntrackedConsumption(usedTotal: Record<number, number>, totalDeviceConsumption: Record<number, number>): UntrackedSplit;
export declare function getCompareTransform(start: Date, compareStart?: Date): (ts: Date) => Date;
