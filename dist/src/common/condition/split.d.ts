import type { Condition as CoreCondition } from "../../data/automation";
import type { VisibilityCondition } from "../../panels/lovelace/common/validate-condition";
/** One `subscribe_condition` (largest server subtree we can group). */
export interface ServerSubtree {
    id: string;
    coreCondition: CoreCondition;
}
/** Evaluate a client-only leaf. `undefined` if it cannot be decided yet. */
export type ClientConditionEvaluator = (condition: VisibilityCondition) => boolean | undefined;
/** Results by subtree id. `undefined` means not reported yet. */
export type ServerConditionResults = Record<string, boolean | undefined>;
export interface SplitConditionTree {
    serverSubtrees: ServerSubtree[];
    /**
     * Combine client and server results. Returns `undefined` while a needed
     * server subtree has not reported.
     */
    evaluate: (clientEvaluator: ClientConditionEvaluator, serverResults: ServerConditionResults) => boolean | undefined;
}
/**
 * Split a visibility tree into server subscriptions and a local combiner.
 *
 * Sibling server conditions under the same parent share one subscription.
 * `enabled: false` is skipped. A template `enabled` on a client node stays
 * unknown. Lovelace `not` is NOT(AND of children).
 */
export declare const splitConditionTree: (conditions: VisibilityCondition[]) => SplitConditionTree;
