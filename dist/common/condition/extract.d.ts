import type { TimeCondition, VisibilityCondition } from "../../panels/lovelace/common/validate-condition";
/**
 * Extract media queries from conditions recursively
 */
export declare function extractMediaQueries(conditions: VisibilityCondition[]): string[];
/**
 * Extract time conditions from conditions recursively
 */
export declare function extractTimeConditions(conditions: VisibilityCondition[]): TimeCondition[];
