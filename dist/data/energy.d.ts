import type { Collection, Connection, HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant, HomeAssistantRegistries } from "../types";
import type { Statistics, StatisticsMetaData } from "./recorder";
export declare const ENERGY_COLLECTION_KEY_PREFIX = "energy_";
export declare const DEFAULT_ENERGY_COLLECTION_KEY = "energy_dashboard";
export declare const DEFAULT_POWER_COLLECTION_KEY = "energy_dashboard_now";
export declare function validateEnergyCollectionKey(key: string | undefined): void;
export declare const emptyGridSourceEnergyPreference: () => GridSourceTypeEnergyPreference;
export declare const emptySolarEnergyPreference: () => SolarSourceTypeEnergyPreference;
export declare const emptyHomeEnergyPreference: () => HomeSourceTypeEnergyPreference;
export declare const emptyBatteryEnergyPreference: () => BatterySourceTypeEnergyPreference;
export declare const emptyGasEnergyPreference: () => GasSourceTypeEnergyPreference;
export declare const emptyWaterEnergyPreference: () => WaterSourceTypeEnergyPreference;
interface EnergySolarForecast {
    wh_hours: Record<string, number>;
}
export type EnergySolarForecasts = Record<string, EnergySolarForecast>;
export interface DeviceConsumptionEnergyPreference {
    stat_consumption: string;
    stat_rate?: string;
    name?: string;
    included_in_stat?: string;
}
export interface PowerConfig {
    stat_rate?: string;
    stat_rate_inverted?: string;
    stat_rate_from?: string;
    stat_rate_to?: string;
}
/**
 * Grid source format.
 * Each grid connection is a single object with import/export/power together.
 * Multiple grid sources are allowed.
 */
export interface GridSourceTypeEnergyPreference {
    type: "grid";
    stat_energy_from: string | null;
    stat_energy_to: string | null;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
    stat_compensation: string | null;
    entity_energy_price_export: string | null;
    number_energy_price_export: number | null;
    stat_rate?: string;
    power_config?: PowerConfig;
    cost_adjustment_day: number;
    name?: string;
}
export interface SolarSourceTypeEnergyPreference {
    type: "solar";
    stat_energy_from: string;
    stat_rate?: string;
    config_entry_solar_forecast: string[] | null;
    name?: string;
}
export interface HomeSourceTypeEnergyPreference {
    type: "home";
    stat_energy_to: string;
    stat_rate?: string;
    name?: string;
}
export interface BatterySourceTypeEnergyPreference {
    type: "battery";
    stat_energy_from: string;
    stat_energy_to: string;
    stat_rate?: string;
    power_config?: PowerConfig;
    stat_soc?: string;
    capacity?: number;
    name?: string;
}
export interface GasSourceTypeEnergyPreference {
    type: "gas";
    stat_energy_from: string;
    stat_rate?: string;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
    unit_of_measurement?: string | null;
    name?: string;
}
export interface WaterSourceTypeEnergyPreference {
    type: "water";
    stat_energy_from: string;
    stat_rate?: string;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
    unit_of_measurement?: string | null;
    name?: string;
}
export type EnergySource = SolarSourceTypeEnergyPreference | HomeSourceTypeEnergyPreference | GridSourceTypeEnergyPreference | BatterySourceTypeEnergyPreference | GasSourceTypeEnergyPreference | WaterSourceTypeEnergyPreference;
export interface EnergyPreferences {
    energy_sources: EnergySource[];
    device_consumption: DeviceConsumptionEnergyPreference[];
    device_consumption_water: DeviceConsumptionEnergyPreference[];
}
export declare const EMPTY_PREFERENCES: EnergyPreferences;
export interface EnergyInfo {
    cost_sensors: Record<string, string>;
    solar_forecast_domains: string[];
}
export interface EnergyValidationIssue {
    type: string;
    affected_entities: [string, string | number | null][];
    translation_placeholders: Record<string, string> | null;
}
export interface EnergyPreferencesValidation {
    energy_sources: EnergyValidationIssue[][];
    device_consumption: EnergyValidationIssue[][];
    device_consumption_water: EnergyValidationIssue[][];
}
export declare const getEnergyInfo: (callWS: HomeAssistant["callWS"]) => Promise<EnergyInfo>;
export declare const getEnergyPreferenceValidation: (hass: HomeAssistant) => Promise<EnergyPreferencesValidation>;
export declare const getEnergyPreferences: (callWS: HomeAssistant["callWS"]) => Promise<EnergyPreferences>;
export declare const saveEnergyPreferences: (hass: HomeAssistant, prefs: Partial<EnergyPreferences>) => Promise<EnergyPreferences>;
export type FossilEnergyConsumption = Record<string, number>;
export declare const getFossilEnergyConsumption: (callWS: HomeAssistant["callWS"], startTime: Date, energy_statistic_ids: string[], co2_statistic_id: string, endTime?: Date, period?: "5minute" | "hour" | "day" | "month") => Promise<FossilEnergyConsumption>;
export interface EnergySourceByType {
    grid?: GridSourceTypeEnergyPreference[];
    solar?: SolarSourceTypeEnergyPreference[];
    home?: HomeSourceTypeEnergyPreference[];
    battery?: BatterySourceTypeEnergyPreference[];
    gas?: GasSourceTypeEnergyPreference[];
    water?: WaterSourceTypeEnergyPreference[];
}
export declare const energySourcesByType: (prefs: EnergyPreferences) => EnergySourceByType;
/**
 * Display name of an individual device. A name set by the user always wins;
 * otherwise the device is named like an entity without the entity part, so
 * the energy and power sensors of one device share a name. Entities without a
 * device and statistics without an entity keep the statistic label.
 *
 * `includeEntityName` adds the entity name back for devices that would
 * otherwise share a name with another device in the same list, see
 * `computeAmbiguousEnergyDevices`.
 */
export declare const computeEnergyLabel: (states: HomeAssistant["states"], formatEntityName: HomeAssistant["formatEntityName"], statisticId: string, statisticsMetaData?: StatisticsMetaData, customName?: string, includeEntityName?: boolean) => string;
export declare const computeEnergyStatisticArea: (registries: HomeAssistantRegistries, statisticId: string) => string | undefined;
/**
 * Statistic ids of the devices that would share their label with another
 * device in the same list, which happens when one device has several meters of
 * the same type. Those are named with the entity name as well, so they stay
 * apart in the charts. Lists hold one type of device, so an energy meter and a
 * water meter of one device never collide.
 */
export declare const computeAmbiguousEnergyDevices: (states: HomeAssistant["states"], formatEntityName: HomeAssistant["formatEntityName"], devices: Partial<DeviceConsumptionEnergyPreference>[], statisticKey?: "stat_consumption" | "stat_rate") => Set<string>;
/**
 * Device labels keyed by statistic id. Cards that show live power or flow
 * key their nodes by `stat_rate` instead of `stat_consumption`; devices
 * without the requested statistic are left out.
 */
export declare const computeEnergyDeviceLabels: (states: HomeAssistant["states"], formatEntityName: HomeAssistant["formatEntityName"], devices: DeviceConsumptionEnergyPreference[], statsMetadata?: Record<string, StatisticsMetaData>, statisticKey?: "stat_consumption" | "stat_rate") => Record<string, string>;
export interface EnergyData {
    start: Date;
    end?: Date;
    startCompare?: Date;
    endCompare?: Date;
    compareMode?: CompareMode;
    prefs: EnergyPreferences;
    info: EnergyInfo;
    stats: Statistics;
    statsMetadata: Record<string, StatisticsMetaData>;
    statsCompare: Statistics;
    co2SignalEntity?: string;
    fossilEnergyConsumption?: FossilEnergyConsumption;
    fossilEnergyConsumptionCompare?: FossilEnergyConsumption;
    waterUnit: string;
    gasUnit: string;
}
export declare const getReferencedStatisticIds: (prefs: EnergyPreferences, info: EnergyInfo, includeTypes?: string[]) => string[];
export declare const getReferencedStatisticIdsPower: (prefs: EnergyPreferences) => string[];
export declare const enum CompareMode {
    NONE = "",
    PREVIOUS = "previous",
    YOY = "yoy"
}
export interface EnergyCollection extends Omit<Collection<EnergyData>, "state"> {
    readonly state: EnergyData | undefined;
    start: Date;
    end?: Date;
    compare?: CompareMode;
    prefs?: EnergyPreferences;
    clearPrefs(): void;
    setPeriod(newStart: Date, newEnd?: Date): void;
    setCompare(compare: CompareMode): void;
    isActive(): boolean;
    _refreshTimeout?: number;
    _updatePeriodTimeout?: number;
    _active: number;
}
export declare const getEnergyDefaultPeriodStorageKey: (panelUrl: string, collectionKey?: string) => string;
export declare const getEnergyFirstStatisticAt: (now: Date, locale: HomeAssistant["locale"], config: HomeAssistant["config"]) => Date;
export declare const shouldFallbackEnergyPeriodToYesterday: (midnightRollover: boolean, now: Date, locale: HomeAssistant["locale"], config: HomeAssistant["config"]) => boolean;
export declare const getEnergyLiveDayPeriod: (midnightRollover: boolean, now: Date, locale: HomeAssistant["locale"], config: HomeAssistant["config"], currentStart: Date) => {
    start: Date;
    end: Date;
};
export declare const getNextEnergyPeriodStart: (midnightRollover: boolean, now: Date, locale: HomeAssistant["locale"], config: HomeAssistant["config"], periodStart?: Date) => Date;
export interface EnergyCollectionOptions {
    callWS: HomeAssistant["callWS"];
    entities: HomeAssistant["entities"];
    states: HomeAssistant["states"];
    locale: HomeAssistant["locale"];
    config: HomeAssistant["config"];
    panelUrl: string;
    key?: string;
    prefs?: EnergyPreferences;
    midnightRollover?: boolean;
}
export declare const getEnergyDataCollection: (connection: Connection, options: EnergyCollectionOptions) => EnergyCollection;
export declare const getEnergySolarForecasts: (callWS: HomeAssistant["callWS"]) => Promise<EnergySolarForecasts>;
declare const energyGasUnitClass: readonly ["volume", "energy"];
export type EnergyGasUnitClass = (typeof energyGasUnitClass)[number];
export declare const getEnergyGasUnitClass: (prefs: EnergyPreferences, excludeSource?: string, statisticsMetaData?: Record<string, StatisticsMetaData>) => EnergyGasUnitClass | undefined;
export declare const energyStatisticHelpUrl = "/docs/energy/faq/#troubleshooting-missing-entities";
export interface EnergySumData {
    to_grid?: Record<number, number>;
    from_grid?: Record<number, number>;
    to_battery?: Record<number, number>;
    from_battery?: Record<number, number>;
    solar?: Record<number, number>;
    home?: Record<number, number>;
    total: {
        to_grid?: number;
        from_grid?: number;
        to_battery?: number;
        from_battery?: number;
        solar?: number;
        home?: number;
    };
    timestamps: number[];
}
export interface EnergyConsumptionData {
    used_total: Record<number, number>;
    grid_to_battery: Record<number, number>;
    battery_to_grid: Record<number, number>;
    solar_to_battery: Record<number, number>;
    solar_to_grid: Record<number, number>;
    used_solar: Record<number, number>;
    used_grid: Record<number, number>;
    used_battery: Record<number, number>;
    total: {
        used_total: number;
        grid_to_battery: number;
        battery_to_grid: number;
        solar_to_battery: number;
        solar_to_grid: number;
        used_solar: number;
        used_grid: number;
        used_battery: number;
    };
}
export declare const getSummedData: import("memoize-one").MemoizedFn<(data: EnergyData) => {
    summedData: EnergySumData;
    compareSummedData?: EnergySumData;
}>;
export declare const computeConsumptionData: import("memoize-one").MemoizedFn<(data: EnergySumData, compareData?: EnergySumData) => {
    consumption: EnergyConsumptionData;
    compareConsumption?: EnergyConsumptionData;
}>;
export declare const computeConsumptionSingle: (data: {
    from_grid: number | undefined;
    to_grid: number | undefined;
    solar: number | undefined;
    to_battery: number | undefined;
    from_battery: number | undefined;
}) => {
    grid_to_battery: number;
    battery_to_grid: number;
    solar_to_battery: number;
    solar_to_grid: number;
    used_solar: number;
    used_grid: number;
    used_battery: number;
    used_total: number;
};
export declare const formatConsumptionShort: (locale: HomeAssistant["locale"], consumption: number | null, unit: string, targetUnit?: string, displayPrecision?: number) => string;
export declare const calculateSolarConsumedGauge: (hasBattery: boolean, data: EnergySumData) => number | undefined;
export declare const FLOW_RATE_TO_LMIN: Record<string, number>;
/**
 * Get current flow rate from an entity state, converted to L/min.
 * @returns Flow rate in L/min, or undefined if unavailable/invalid.
 */
export declare const getFlowRateFromState: (stateObj?: HassEntity) => number | undefined;
/**
 * Compute the total flow rate across all energy sources of a given type.
 * Used by gas and water total badges.
 */
export declare const computeTotalFlowRate: (sourceType: "gas" | "water", prefs: EnergyPreferences, states: HomeAssistant["states"]) => {
    value: number;
    unit: string;
};
/**
 * Format a flow rate value (in L/min) to a human-readable string using
 * the preferred unit system: metric → L/min, imperial → gal/min.
 */
export declare const formatFlowRateShort: (hassLocale: HomeAssistant["locale"], lengthUnitSystem: string, litersPerMin: number) => string;
/**
 * Get current power value from entity state, normalized to watts (W)
 * @param stateObj - The entity state object to get power value from
 * @returns Power value in W (watts), or undefined if entity not found or invalid
 */
export declare const getPowerFromState: (stateObj: HassEntity) => number | undefined;
/**
 * Format power value in watts (W) to a short string with the appropriate unit
 * @param locale - The locale to format the number with
 * @param powerWatts - The power value in watts (W)
 * @returns A string with the formatted power value and unit
 */
export declare const formatPowerShort: (locale: HomeAssistant["locale"], powerWatts: number) => string;
export declare function getSuggestedPeriod(start: Date, end?: Date, fine?: boolean): "5minute" | "hour" | "day" | "month";
export declare const downloadEnergyData: (energyData: EnergyCollection, currency: string) => void;
export {};
