import type { HassConfig } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../data/translation";
export declare const calcDate: (date: Date, fn: (date: Date, options?: any) => Date, locale: FrontendLocaleData, config: HassConfig, options?: any) => Date;
export declare const calcDateProperty: (date: Date, fn: (date: Date, options?: any) => boolean | number, locale: FrontendLocaleData, config: HassConfig, options?: any) => number | boolean;
export declare const calcDateDifferenceProperty: (endDate: Date, startDate: Date, fn: (date: Date, options?: any) => boolean | number, locale: FrontendLocaleData, config: HassConfig) => number | boolean;
export declare const shiftDateRange: (startDate: Date, endDate: Date, forward: boolean, locale: FrontendLocaleData, config: any) => {
    start: Date;
    end: Date;
};
