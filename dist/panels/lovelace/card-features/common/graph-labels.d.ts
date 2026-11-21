import type { CSSResultGroup, TemplateResult } from "lit";
import type { FrontendLocaleData } from "../../../../data/translation";
export declare const LABEL_HEIGHT = 10;
export declare const LABEL_GAP = 2;
export declare const renderDayLabels: (entries: {
    datetime: string;
}[], step: number, locale: FrontendLocaleData) => TemplateResult;
export declare const renderHourLabels: (hoursToShow: number, locale: FrontendLocaleData) => TemplateResult;
export declare const renderHourSlotLabels: (hoursToShow: number, locale: FrontendLocaleData) => TemplateResult;
export declare const graphLabelsStyles: CSSResultGroup;
