import type { BarSeriesOption } from "echarts/types/dist/shared";
/**
 * `extraBuckets` (only used when `stacked`) seeds the bucket union with the
 * expected statistics grid so sparse datasets get zero-filled across the whole
 * range, including past their last real point. Without it, buckets are only
 * derived from the data and trailing buckets are never filled (legacy
 * behavior, kept for callers that don't pass a grid).
 */
export declare function fillDataGapsAndRoundCaps(datasets: BarSeriesOption[], stacked?: boolean, extraBuckets?: number[]): void;
