import type { CloudStatus } from "../../../../data/cloud";
import type { HomeAssistant } from "../../../../types";
export declare const getAvailableAssistants: import("memoize-one").MemoizedFn<(cloudStatus: CloudStatus | undefined, hass: HomeAssistant) => string[]>;
