import type { HomeAssistant } from "../../types";
import type { VisibilityCondition } from "../../panels/lovelace/common/validate-condition";
/**
 * Observe the client-evaluated parts of a condition tree — `screen` media
 * queries and `time` boundaries — and invoke `onChange` whenever one of them
 * could have flipped.
 *
 * This does not evaluate the conditions itself: the caller recombines client
 * and server results on notification. Used by `ConditionEvaluatorController`,
 * which merges these client signals with the results of `subscribe_condition`
 * subscriptions.
 */
export declare function observeConditionChanges(conditions: VisibilityCondition[], getHass: () => HomeAssistant, addListener: (unsub: () => void) => void, onChange: () => void): void;
