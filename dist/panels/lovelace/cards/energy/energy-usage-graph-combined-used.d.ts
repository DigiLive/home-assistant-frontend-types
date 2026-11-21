/**
 * In periods where part of the sources' energy did not reach the home (grid
 * charging a battery, a battery exporting), per-source attribution is
 * ambiguous if multiple sources have data in the same period. Values that
 * round to 0 Wh are float noise from subtracting sums.
 * Rewrites single-source periods in place on `bySource`, and returns a
 * combined used map for multi-source periods. Returns undefined when no
 * combined series is needed so the chart does not add an empty legend item.
 */
export declare function buildCombinedUsed(bySource: Record<string, Record<number, number>>, notUsed: Record<number, number>, used: Record<number, number>): Record<number, number> | undefined;
