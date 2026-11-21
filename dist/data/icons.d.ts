import type { Connection, HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "./entity/entity_registry";
/** Icon to use when no icon specified for service. */
export declare const DEFAULT_SERVICE_ICON: string;
/** Icon to use when no icon specified for domain. */
export declare const DEFAULT_DOMAIN_ICON: string;
/** Fallback icons for each domain */
export declare const FALLBACK_DOMAIN_ICONS: {
    ai_task: string;
    air_quality: string;
    alert: string;
    automation: string;
    battery: string;
    calendar: string;
    climate: string;
    configurator: string;
    conversation: string;
    counter: string;
    date: string;
    datetime: string;
    demo: string;
    device_tracker: string;
    door: string;
    garage_door: string;
    gate: string;
    google_assistant: string;
    group: string;
    homeassistant: string;
    homekit: string;
    humidity: string;
    illuminance: string;
    image_processing: string;
    image: string;
    infrared: string;
    input_boolean: string;
    input_button: string;
    input_datetime: string;
    input_number: string;
    input_select: string;
    input_text: string;
    lawn_mower: string;
    light: string;
    moisture: string;
    motion: string;
    notify: string;
    number: string;
    occupancy: string;
    persistent_notification: string;
    person: string;
    plant: string;
    power: string;
    proximity: string;
    radio_frequency: string;
    remote: string;
    scene: string;
    schedule: string;
    script: string;
    select: string;
    sensor: string;
    simple_alarm: string;
    siren: string;
    stt: string;
    sun: string;
    temperature: string;
    text: string;
    time: string;
    timer: string;
    template: string;
    todo: string;
    tts: string;
    vacuum: string;
    wake_word: string;
    weather: string;
    window: string;
    zone: string;
};
interface IconResources<T extends ComponentIcons | PlatformIcons | ServiceIcons | TriggerIcons | ConditionIcons> {
    resources: Record<string, T>;
}
type PlatformIcons = Record<string, Record<string, {
    state?: Record<string, string>;
    range?: Record<string, string>;
    state_attributes?: Record<string, {
        state?: Record<string, string>;
        range?: Record<string, string>;
        default?: string;
    }>;
    default?: string;
}>>;
export type ComponentIcons = Record<string, {
    state?: Record<string, string>;
    range?: Record<string, string>;
    state_attributes?: Record<string, {
        state?: Record<string, string>;
        range?: Record<string, string>;
        default: string;
    }>;
    default: string;
}>;
type ServiceIcons = Record<string, {
    service: string;
    sections?: Record<string, string>;
}>;
type TriggerIcons = Record<string, {
    trigger: string;
    sections?: Record<string, string>;
}>;
type ConditionIcons = Record<string, {
    condition: string;
    sections?: Record<string, string>;
}>;
export type IconCategory = "entity" | "entity_component" | "services" | "triggers" | "conditions";
interface CategoryType {
    entity: PlatformIcons;
    entity_component: ComponentIcons;
    services: ServiceIcons;
    triggers: TriggerIcons;
    conditions: ConditionIcons;
}
export declare const getHassIcons: <T extends IconCategory>(connection: Connection, category: T, integration?: string) => Promise<IconResources<CategoryType[T]>>;
export declare const getPlatformIcons: (hassConfig: HomeAssistant["config"], connection: Connection, integration: string, force?: boolean) => Promise<PlatformIcons | undefined>;
export declare const getComponentIcons: (connection: Connection, hassConfig: HomeAssistant["config"], domain: string, force?: boolean) => Promise<ComponentIcons | undefined>;
export declare const getCategoryIcons: <T extends Exclude<IconCategory, "entity" | "entity_component">>(connection: Connection, hassConfig: HomeAssistant["config"], category: T, domain?: string, force?: boolean) => Promise<CategoryType[T] | Record<string, CategoryType[T]> | undefined>;
export declare const getServiceIcons: (connection: Connection, hassConfig: HomeAssistant["config"], domain?: string, force?: boolean) => Promise<ServiceIcons | Record<string, ServiceIcons> | undefined>;
export declare const getTriggerIcons: (connection: Connection, hassConfig: HomeAssistant["config"], domain?: string, force?: boolean) => Promise<TriggerIcons | Record<string, TriggerIcons> | undefined>;
export declare const getConditionIcons: (connection: Connection, hassConfig: HomeAssistant["config"], domain?: string, force?: boolean) => Promise<ConditionIcons | Record<string, ConditionIcons> | undefined>;
export declare const entityIcon: (entities: HomeAssistant["entities"], hassConfig: HomeAssistant["config"], hassConnection: Connection, stateObj: HassEntity, state?: string) => Promise<string>;
export declare const entryIcon: (hass: HomeAssistant, entry: EntityRegistryEntry | EntityRegistryDisplayEntry) => Promise<string>;
export declare const attributeIcon: (hassConfig: HomeAssistant["config"], hassConnection: HomeAssistant["connection"], entities: HomeAssistant["entities"], state: HassEntity, attribute: string, attributeValue?: string) => Promise<string>;
export declare const triggerIcon: (connection: Connection, hassConfig: HomeAssistant["config"], trigger: string) => Promise<string | undefined>;
export declare const conditionIcon: (connection: Connection, hassConfig: HomeAssistant["config"], condition: string) => Promise<string | undefined>;
export declare const serviceIcon: (connection: Connection, hassConfig: HomeAssistant["config"], service: string) => Promise<string | undefined>;
export declare const serviceSectionIcon: (connection: Connection, hassConfig: HomeAssistant["config"], service: string, section: string) => Promise<string | undefined>;
export declare const domainIcon: (connection: Connection, hassConfig: HomeAssistant["config"], domain: string, deviceClass?: string, state?: string) => Promise<string | undefined>;
export {};
