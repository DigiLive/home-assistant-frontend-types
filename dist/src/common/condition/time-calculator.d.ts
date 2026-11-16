import type { HomeAssistant } from "../../types";
import type { TimeCondition } from "../../panels/lovelace/common/validate-condition";
/**
 * Calculate milliseconds until next time boundary for a time condition
 * @param hass Home Assistant object
 * @param timeCondition Time condition to calculate next update for
 * @returns Milliseconds until next boundary, or undefined if no boundaries
 */
export declare function calculateNextTimeUpdate(hass: HomeAssistant, { after, before, weekdays }: Omit<TimeCondition, "condition">): number | undefined;
