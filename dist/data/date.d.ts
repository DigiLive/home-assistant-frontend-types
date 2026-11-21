import type { HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistantApi } from "../types";
export declare const stateToIsoDateString: (entityState: HassEntityBase) => string;
export declare const setDateValue: (callService: HomeAssistantApi["callService"], entityId: string, date?: string | undefined) => void;
