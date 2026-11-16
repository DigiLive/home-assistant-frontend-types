import type { VisibilityCondition } from "../../panels/lovelace/common/validate-condition";
/**
 * Drop entries that are not condition objects, at any depth. Returns the
 * same array when every entry is valid.
 */
export declare const dropInvalidConditions: (conditions: VisibilityCondition[]) => VisibilityCondition[];
