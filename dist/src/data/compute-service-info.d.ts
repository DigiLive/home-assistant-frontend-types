import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
export interface ServiceInfo {
    label: string;
    icon?: string;
    iconPath: string;
}
export declare const DEFAULT_SERVICE_INFO: ServiceInfo;
export declare const computeServiceLabel: (localize: LocalizeFunc, services: HomeAssistant["services"], service: string) => string;
