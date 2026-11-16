import type { HassConfig } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../data/translation";
export declare const formatDateWeekdayDay: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDate: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateShort: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateNumeric: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateVeryShort: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateMonthYear: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateMonth: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateMonthShort: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateYear: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateWeekday: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateWeekdayShort: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateWeekdayVeryShortDate: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateWeekdayShortDate: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
/**
 * Format a date as YYYY-MM-DD. Uses "en-CA" because it's the only
 * Intl locale that natively outputs ISO 8601 date format.
 * Locale/config are only used to resolve the time zone.
 */
export declare const formatISODateOnly: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatCallyDateRange: (start: Date, end: Date, locale: FrontendLocaleData, config: HassConfig) => string;
/**
 * August 2021, for calendar days coming out of cally.
 *
 * cally hands out calendar days as `Date` objects anchored to UTC midnight, and
 * formats its own headings in UTC too. Anything derived from a cally event has
 * to be formatted the same way: the resolved time zone shifts the day back for
 * negative UTC offsets, which becomes a wrong month — and in January a wrong
 * year — whenever the day is the 1st.
 */
export declare const formatCallyMonthYear: (dateObj: Date, locale: FrontendLocaleData) => string;
