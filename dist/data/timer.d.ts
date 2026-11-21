import type { HassEntity, HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { FormatEntityStateFunc } from "../common/translations/entity-state";
import type { HaDurationData } from "../components/ha-duration-input";
import type { HomeAssistant } from "../types";
import type { FrontendLocaleData } from "./translation";
export type TimerEntity = HassEntityBase & {
    attributes: HassEntityAttributeBase & {
        duration: string;
        remaining: string;
        restore: boolean;
        finishes_at?: string;
        last_transition?: string;
    };
};
export interface DurationDict {
    hours?: number | string;
    minutes?: number | string;
    seconds?: number | string;
}
export interface Timer {
    id: string;
    name: string;
    icon?: string;
    duration?: string | number | DurationDict;
    restore?: boolean;
}
export interface TimerMutableParams {
    name: string;
    icon: string;
    duration: string | number | DurationDict;
    restore: boolean;
}
export declare const fetchTimer: (hass: HomeAssistant) => Promise<Timer[]>;
export declare const createTimer: (hass: HomeAssistant, values: TimerMutableParams) => Promise<Timer>;
export declare const updateTimer: (hass: HomeAssistant, id: string, updates: Partial<TimerMutableParams>) => Promise<Timer>;
export declare const deleteTimer: (hass: HomeAssistant, id: string) => Promise<unknown>;
export declare const timerJustFinished: (oldStateObj: HassEntity | undefined, stateObj: HassEntity) => boolean;
export declare const timerTimeRemaining: (stateObj: HassEntity) => undefined | number;
export declare const computeDisplayTimer: (formatEntityState: FormatEntityStateFunc, stateObj: HassEntity, timeRemaining?: number) => string | null;
export declare const normalizeTimerDuration: (data: HaDurationData) => HaDurationData;
export declare const durationDataToTimerString: (data: HaDurationData) => string;
export declare const timerDurationData: (stateObj: HassEntity) => HaDurationData | undefined;
export declare const normalizeTimerPresets: (presets?: number[]) => number[];
export declare const timerPresetLabel: (locale: FrontendLocaleData, seconds: number) => string;
