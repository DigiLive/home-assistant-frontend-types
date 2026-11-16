import type { HassEntities } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../../common/translations/localize";
import type { HaFormSchema } from "../../components/ha-form/types";
import type { CallWS, HomeAssistant } from "../../types";
import type { BaseTrigger } from "../automation";
import type { DeviceCompositeSplits } from "./device_registry";
import type { EntityRegistryEntry } from "../entity/entity_registry";
export interface DeviceAutomation {
    alias?: string;
    note?: string;
    device_id: string;
    domain: string;
    entity_id?: string;
    type?: string;
    subtype?: string;
    event?: string;
    enabled?: boolean;
    metadata?: {
        secondary?: boolean;
    };
}
export type DeviceAction = DeviceAutomation;
export interface DeviceCondition extends DeviceAutomation {
    condition: "device";
}
export type DeviceTrigger = DeviceAutomation & BaseTrigger & {
    trigger: "device";
};
export interface DeviceCapabilities {
    extra_fields?: HaFormSchema[];
}
export declare const fetchDeviceActions: (callWS: CallWS, deviceId: string) => Promise<DeviceAutomation[]>;
export declare const fetchDeviceConditions: (callWS: CallWS, deviceId: string) => Promise<DeviceCondition[]>;
export declare const fetchDeviceTriggers: (callWS: CallWS, deviceId: string) => Promise<DeviceTrigger[]>;
export declare const fetchDeviceActionCapabilities: (callWS: CallWS, action: DeviceAction) => Promise<DeviceCapabilities>;
export declare const fetchDeviceConditionCapabilities: (callWS: CallWS, condition: DeviceCondition) => Promise<DeviceCapabilities>;
export declare const fetchDeviceTriggerCapabilities: (callWS: CallWS, trigger: DeviceTrigger) => Promise<DeviceCapabilities>;
export declare const deviceAutomationsEqual: (entityRegistry: EntityRegistryEntry[], a: DeviceAutomation, b: DeviceAutomation) => boolean;
export declare const deviceAutomationEditorMode: (hass: HomeAssistant, deviceId: string | undefined, compositeSplits: DeviceCompositeSplits | undefined) => "editable" | "loading" | "unknown-device";
export declare const findEquivalentDeviceAutomation: <T extends DeviceAutomation>(entityRegistry: EntityRegistryEntry[], automations: T[], automation: DeviceAutomation) => T | undefined;
export declare const fetchReplacementDevices: <T extends DeviceAutomation>(hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], automation: DeviceAutomation, compositeSplits: DeviceCompositeSplits, fetchDeviceAutomations: (callWS: CallWS, deviceId: string) => Promise<T[]>) => Promise<string[]>;
export declare const localizeDeviceAutomationAction: (localize: LocalizeFunc, states: HassEntities, formatEntityName: HomeAssistant["formatEntityName"], entityRegistry: EntityRegistryEntry[], action: DeviceAction) => string;
export declare const localizeDeviceAutomationCondition: (localize: LocalizeFunc, states: HassEntities, formatEntityName: HomeAssistant["formatEntityName"], entityRegistry: EntityRegistryEntry[], condition: DeviceCondition) => string;
export declare const localizeDeviceAutomationTrigger: (localize: LocalizeFunc, states: HassEntities, formatEntityName: HomeAssistant["formatEntityName"], entityRegistry: EntityRegistryEntry[], trigger: DeviceTrigger) => string;
export declare const localizeExtraFieldsComputeLabelCallback: (localize: LocalizeFunc, deviceAutomation: DeviceAutomation) => (schema: any) => string;
export declare const localizeExtraFieldsComputeHelperCallback: (localize: LocalizeFunc, deviceAutomation: DeviceAutomation) => (schema: any) => string | undefined;
export declare const sortDeviceAutomations: (automationA: DeviceAutomation, automationB: DeviceAutomation) => -1 | 0 | 1;
