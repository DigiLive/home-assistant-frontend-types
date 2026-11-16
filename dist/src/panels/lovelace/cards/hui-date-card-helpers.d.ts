import type { HassConfig } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../../data/translation";
import type { DateCardConfig } from "./types";
/**
 * Whether Intl accepts `timeZone` as a valid IANA zone. YAML-authored
 * configs bypass the editor's picker, so an unchecked bad value would
 * otherwise only surface as a crash later, when the card formats a date.
 */
export declare const isValidTimeZone: (timeZone: string) => boolean;
/**
 * Resolves the actual IANA time zone the card should display, honoring a
 * card-level override before falling back to the user's profile/server
 * setting (same fallback chain as the Clock card).
 */
export declare const computeResolvedTimeZone: (locale: FrontendLocaleData, config: HassConfig, cardConfig: DateCardConfig) => string;
/**
 * Formats "now" per the card's configured date_format tokens (same token
 * system as the Clock card), falling back to `formatDefaultDate` when no
 * tokens are configured.
 */
export declare const computeDateText: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig, cardConfig: DateCardConfig) => string;
/**
 * Milliseconds from `dateObj` until the next wall-clock midnight in
 * `timeZone`, computed via TZDate (same approach as ha-full-calendar.ts) so
 * it stays correct across DST transitions instead of assuming 1 wall-clock
 * hour always equals 1 real hour.
 */
export declare const computeMsUntilMidnight: (dateObj: Date, timeZone: string) => number;
