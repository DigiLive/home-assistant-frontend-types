import type { LocalizeFunc } from "../../common/translations/localize";
import type { HomeAssistant } from "../../types";
export interface EntityType {
    domain: string;
    deviceClass?: string;
}
export declare const entityTypeKey: (domain: string, deviceClass?: string) => string;
export declare const parseEntityType: (key: string) => EntityType;
export declare const entityTypesNeedStates: (types?: string[]) => boolean;
export declare const usedEntityTypes: (states: HomeAssistant["states"], collapseSingleClass?: boolean) => Map<string, string[]>;
export declare const entityTypeFilterFunc: (types: string[], states: HomeAssistant["states"]) => ((entityId: string) => boolean);
export declare const FIXED_ENTITY_TYPE_ICONS: Record<string, string>;
export declare const computeEntityTypeDeviceClassName: (localize: LocalizeFunc, domain: string, deviceClass: string) => string;
export declare const sortDeviceClasses: (localize: LocalizeFunc, domain: string, deviceClasses: string[], language?: string) => {
    deviceClass: string;
    name: string;
}[];
export declare const computeEntityTypeNames: (localize: LocalizeFunc, keys: string[]) => Map<string, string>;
