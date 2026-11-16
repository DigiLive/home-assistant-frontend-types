import type { HomeAssistant } from "../../types";
export type DateRange = "today" | "yesterday" | "this_week" | "this_month" | "this_quarter" | "this_year" | "now-7d" | "now-30d" | "now-365d" | "now-12m" | "now-1h" | "now-12h" | "now-24h";
export declare const calcDateRange: (locale: HomeAssistant["locale"], hassConfig: HomeAssistant["config"], range: DateRange) => [Date, Date];
