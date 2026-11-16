import type { HaDurationData } from "../../components/ha-duration-input";
export interface NormalizedDuration {
    negative: boolean;
    duration: HaDurationData;
}
export interface DurationUnits {
    enableDay: boolean;
    enableSecond: boolean;
    enableMillisecond: boolean;
}
export declare const normalizeDuration: (duration: HaDurationData, { enableDay, enableSecond, enableMillisecond }: DurationUnits) => NormalizedDuration;
export declare const applyDurationSign: (duration: HaDurationData, negative: boolean) => HaDurationData;
