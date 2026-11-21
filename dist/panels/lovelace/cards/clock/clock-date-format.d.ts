import type { FrontendLocaleData } from "../../../../data/translation";
import type { ClockCardConfig, ClockCardDatePart } from "../types";
/**
 * Normalized date configuration used by clock card renderers.
 */
interface ClockCardDateConfig {
    parts: ClockCardDatePart[];
}
/**
 * Resolves the locale and time zone for a clock card from the user's locale,
 * the server time zone and the card's configuration. Applies the optional
 * `time_format` override to the locale and falls back to the user's preferred
 * time zone.
 */
export declare const resolveClockCardLocale: (userLocale: FrontendLocaleData, serverTimeZone: string, config: Pick<ClockCardConfig, "time_format" | "time_zone">) => {
    locale: FrontendLocaleData;
    timeZone: string;
};
/**
 * All selectable date tokens exposed by the clock card editor.
 */
export declare const CLOCK_CARD_DATE_PARTS: readonly ClockCardDatePart[];
/**
 * Returns a normalized date config from a card configuration object.
 */
export declare const getClockCardDateConfig: (config?: Pick<ClockCardConfig, "date_format">) => ClockCardDateConfig;
/**
 * Checks whether the clock configuration resolves to any visible date output.
 */
export declare const hasClockCardDate: (config?: Pick<ClockCardConfig, "date_format">) => boolean;
/**
 * Converts normalized date tokens into Intl.DateTimeFormat options.
 *
 * Separator tokens are ignored. If multiple tokens target the same Intl field,
 * the last one wins.
 */
export declare const getClockCardDateTimeFormatOptions: (dateConfig: ClockCardDateConfig) => Intl.DateTimeFormatOptions;
/**
 * Builds the final date string from literal date tokens.
 *
 * Value tokens are localized through Intl.DateTimeFormat. Separator tokens are
 * always rendered literally. A default space is only inserted between adjacent
 * value tokens.
 */
export declare const formatClockCardDate: (date: Date, dateConfig: ClockCardDateConfig, language: string, timeZone?: string) => string;
export {};
