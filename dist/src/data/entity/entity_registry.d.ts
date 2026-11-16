import type { Connection } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../../types";
import type { LightColor } from "../light";
import type { NextNamePart, RegistryEntry } from "../registry";
import type { Segment } from "../vacuum";
export type EntityCategory = "config" | "diagnostic";
export interface EntityRegistryDisplayEntry {
    entity_id: string;
    name?: string;
    icon?: string;
    device_id?: string;
    area_id?: string;
    next_name_part?: NextNamePart;
    labels: string[];
    hidden?: boolean;
    entity_category?: EntityCategory;
    translation_key?: string;
    platform?: string;
    display_precision?: number;
    has_entity_name?: boolean;
}
export interface EntityRegistryDisplayEntryResponse {
    entities: {
        ei: string;
        di?: string;
        ai?: string;
        np?: NextNamePart;
        lb: string[];
        ec?: number;
        en?: string;
        ic?: string;
        pl: string;
        tk?: string;
        hb?: boolean;
        dp?: number;
        hn?: boolean;
    }[];
    entity_categories: Record<number, EntityCategory>;
}
export interface EntityRegistryEntry extends RegistryEntry {
    id: string;
    entity_id: string;
    name: string | null;
    icon: string | null;
    platform: string;
    config_entry_id: string | null;
    config_subentry_id: string | null;
    device_id: string | null;
    area_id: string | null;
    next_name_part?: NextNamePart | null;
    labels: string[];
    disabled_by: "user" | "device" | "integration" | "config_entry" | null;
    hidden_by: "integration" | "user" | null;
    entity_category: EntityCategory | null;
    has_entity_name: boolean;
    original_name?: string;
    unique_id: string;
    translation_key?: string;
    options: EntityRegistryOptions | null;
    categories: Record<string, string>;
}
export interface ExtEntityRegistryEntry extends EntityRegistryEntry {
    capabilities: Record<string, unknown> | null;
    original_icon?: string;
    device_class?: string;
    original_device_class?: string;
    aliases: (string | null)[];
}
export interface UpdateEntityRegistryEntryResult {
    entity_entry: ExtEntityRegistryEntry;
    reload_delay?: number;
    require_restart?: boolean;
}
export interface SensorEntityOptions {
    display_precision?: number | null;
    suggested_display_precision?: number | null;
    unit_of_measurement?: string | null;
}
export interface LightEntityOptions {
    favorite_colors?: LightColor[];
}
export interface ValveEntityOptions {
    favorite_positions?: number[];
}
export interface TimerEntityOptions {
    presets?: number[];
}
export type FavoriteOption = "favorite_colors" | "favorite_positions" | "favorite_tilt_positions" | "presets";
export type FavoritesDomain = "light" | "cover" | "valve" | "timer";
export type FavoriteOptionValue = LightColor[] | number[];
export declare const DOMAINS_WITH_FAVORITES: FavoritesDomain[];
export declare const isFavoritesDomain: (domain: string) => domain is FavoritesDomain;
export declare const shouldShowFavoriteOptions: (values?: FavoriteOptionValue | null) => boolean;
export declare const hasCustomFavoriteOptionValues: (values?: FavoriteOptionValue | null) => boolean;
export interface CoverEntityOptions {
    favorite_positions?: number[];
    favorite_tilt_positions?: number[];
}
export interface NumberEntityOptions {
    unit_of_measurement?: string | null;
}
export interface LockEntityOptions {
    default_code?: string | null;
}
export interface AlarmControlPanelEntityOptions {
    default_code?: string | null;
}
export interface CalendarEntityOptions {
    color?: string | null;
}
export interface WeatherEntityOptions {
    precipitation_unit?: string | null;
    pressure_unit?: string | null;
    temperature_unit?: string | null;
    visibility_unit?: string | null;
    wind_speed_unit?: string | null;
}
export interface SwitchAsXEntityOptions {
    entity_id: string;
    invert: boolean;
}
export interface VacuumEntityOptions {
    area_mapping?: Record<string, string[]>;
    last_seen_segments?: Segment[];
}
export interface DeviceTrackerEntityOptions {
    associated_zone?: string | null;
}
export interface EntityRegistryOptions {
    number?: NumberEntityOptions;
    sensor?: SensorEntityOptions;
    alarm_control_panel?: AlarmControlPanelEntityOptions;
    calendar?: CalendarEntityOptions;
    lock?: LockEntityOptions;
    weather?: WeatherEntityOptions;
    light?: LightEntityOptions;
    cover?: CoverEntityOptions;
    valve?: ValveEntityOptions;
    timer?: TimerEntityOptions;
    vacuum?: VacuumEntityOptions;
    device_tracker?: DeviceTrackerEntityOptions;
    switch_as_x?: SwitchAsXEntityOptions;
    conversation?: Record<string, unknown>;
    "cloud.alexa"?: Record<string, unknown>;
    "cloud.google_assistant"?: Record<string, unknown>;
}
export interface EntityRegistryEntryUpdateParams {
    name?: string | null;
    icon?: string | null;
    device_class?: string | null;
    area_id?: string | null;
    disabled_by?: string | null;
    hidden_by?: string | null;
    new_entity_id?: string;
    options_domain?: string;
    options?: SensorEntityOptions | NumberEntityOptions | LockEntityOptions | AlarmControlPanelEntityOptions | CalendarEntityOptions | WeatherEntityOptions | LightEntityOptions | CoverEntityOptions | ValveEntityOptions | TimerEntityOptions | VacuumEntityOptions | DeviceTrackerEntityOptions;
    aliases?: (string | null)[];
    labels?: string[];
    categories?: Record<string, string | null>;
}
export declare const findBatteryEntity: <T extends {
    entity_id: string;
}>(states: HomeAssistant["states"], entities: T[]) => T | undefined;
export declare const findBatteryChargingEntity: <T extends {
    entity_id: string;
}>(states: HomeAssistant["states"], entities: T[]) => T | undefined;
export declare const computeEntityRegistryName: (hass: HomeAssistant, entry: EntityRegistryEntry) => string | null;
export declare const getExtendedEntityRegistryEntry: (hass: Pick<HomeAssistant, "callWS">, entityId: string) => Promise<ExtEntityRegistryEntry>;
export declare const getExtendedEntityRegistryEntries: (hass: HomeAssistant, entityIds: string[]) => Promise<Record<string, ExtEntityRegistryEntry | null>>;
export declare const updateEntityRegistryEntry: (hass: Pick<HomeAssistant, "callWS">, entityId: string, updates: Partial<EntityRegistryEntryUpdateParams>) => Promise<UpdateEntityRegistryEntryResult>;
export declare const removeEntityRegistryEntry: (hass: HomeAssistant, entityId: string) => Promise<void>;
export declare const fetchEntityRegistry: (conn: Connection) => Promise<EntityRegistryEntry[]>;
export declare const fetchEntityRegistryDisplay: (conn: Connection) => Promise<EntityRegistryDisplayEntryResponse>;
export declare const subscribeEntityRegistry: (conn: Connection, onChange: (entities: EntityRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
export declare const sortEntityRegistryByName: (entries: EntityRegistryEntry[], language: string) => EntityRegistryEntry[];
export declare const entityRegistryByEntityId: import("memoize-one").MemoizedFn<(entries: EntityRegistryEntry[]) => Record<string, EntityRegistryEntry>>;
export declare const entityRegistryById: import("memoize-one").MemoizedFn<(entries: EntityRegistryEntry[]) => Record<string, EntityRegistryEntry>>;
export declare const getEntityPlatformLookup: (entities: EntityRegistryEntry[]) => Record<string, string>;
export declare const getAutomaticEntityIds: (hass: HomeAssistant, entity_ids: string[]) => Promise<Record<string, string>>;
