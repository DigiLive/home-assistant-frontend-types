import type { HomeAssistant } from "../../types";
import type { TimeCondition } from "../../panels/lovelace/common/validate-condition";
/**
 * Validate a time string format and value ranges without creating Date objects
 * @param timeString Time string to validate (HH:MM or HH:MM:SS)
 * @returns true if valid, false otherwise
 */
export declare function isValidTimeString(timeString: string): boolean;
/**
 * Parse a time string (HH:MM or HH:MM:SS) and set it on today's date in the given timezone
 *
 * Note: This function assumes the time string has already been validated by
 * isValidTimeString() at configuration time. It does not re-validate at runtime
 * for consistency with other condition types (screen, user, location, etc.)
 *
 * @param timeString The time string to parse (must be pre-validated)
 * @param timezone The timezone to use
 * @returns The Date object
 */
export declare const parseTimeString: (timeString: string, timezone: string) => Date;
/**
 * Check if the current time matches the time condition (after/before/weekday)
 * @param hass Home Assistant object
 * @param timeCondition Time condition to check
 * @returns true if current time matches the condition
 */
export declare const checkTimeInRange: (hass: Pick<HomeAssistant, "locale" | "config">, { after, before, weekdays }: Omit<TimeCondition, "condition">) => boolean;
