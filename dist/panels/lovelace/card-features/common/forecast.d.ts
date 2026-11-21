import type { HassEntity } from "home-assistant-js-websocket";
import type { ForecastResolution } from "../types";
export declare const DEFAULT_DAYS_TO_SHOW = 7;
export declare const DEFAULT_HOURS_TO_SHOW = 24;
export declare const MS_PER_HOUR: number;
export declare const supportsForecast: (stateObj: HassEntity | undefined) => boolean;
export declare const resolveForecastResolution: (stateObj: HassEntity | undefined, configured?: ForecastResolution) => ForecastResolution | undefined;
