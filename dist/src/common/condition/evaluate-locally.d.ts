import type { ConditionContext, VisibilityCondition } from "../../panels/lovelace/common/validate-condition";
import type { HomeAssistant } from "../../types";
/**
 * Evaluate the parts of a visibility tree the client can know exactly.
 * Unknown leaves stay unknown (`not: [template]` is not treated as visible).
 * Returns `undefined` when the result still depends on core.
 */
export declare const evaluateConditionsLocally: (conditions: VisibilityCondition[], hass: HomeAssistant, context: ConditionContext) => boolean | undefined;
