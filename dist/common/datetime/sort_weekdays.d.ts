import type { FrontendLocaleData } from "../../data/translation";
import { type WeekdayShort } from "./weekday";
export declare const weekdaysFromFirst: (locale: FrontendLocaleData) => WeekdayShort[];
export declare const sortWeekdays: <T extends string>(locale: FrontendLocaleData, days: readonly T[]) => T[];
