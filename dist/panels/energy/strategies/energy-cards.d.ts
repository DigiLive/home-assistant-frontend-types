import type { LocalizeKeys } from "../../../common/translations/localize";
import type { EnergyPreferences } from "../../../data/energy";
import type { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
/** Strategy config shared by the per-view energy strategies. */
export interface EnergyViewStrategyConfig extends LovelaceStrategyConfig {
    collection_key?: string;
    hidden_cards?: string[];
}
export type EnergyViewPath = "overview" | "electricity" | "gas" | "water" | "now";
export declare const hasGridSource: (prefs: EnergyPreferences) => boolean;
export declare const hasReturn: (prefs: EnergyPreferences) => boolean;
export declare const hasSolar: (prefs: EnergyPreferences) => boolean;
export declare const hasHomeSource: (prefs: EnergyPreferences) => boolean;
export declare const hasBattery: (prefs: EnergyPreferences) => boolean;
/** Any electricity-relevant source: grid, solar, or battery. */
export declare const hasEnergySource: (prefs: EnergyPreferences) => boolean;
export declare const hasGasSource: (prefs: EnergyPreferences) => boolean;
export declare const hasWaterSource: (prefs: EnergyPreferences) => boolean;
export declare const hasWaterDevices: (prefs: EnergyPreferences) => boolean;
export declare const hasDeviceConsumption: (prefs: EnergyPreferences) => boolean;
export declare const hasPowerSources: (prefs: EnergyPreferences) => boolean;
export declare const hasPowerDevices: (prefs: EnergyPreferences) => boolean;
export declare const hasWaterRateDevices: (prefs: EnergyPreferences) => boolean;
/** A water source exposing a live flow-rate statistic. */
export declare const hasWaterRateSource: (prefs: EnergyPreferences) => boolean;
/** A gas source exposing a live flow-rate statistic. */
export declare const hasGasRateSource: (prefs: EnergyPreferences) => boolean;
/** Whether the Now view has any live power or flow-rate content to show. */
export declare const hasNowViewContent: (prefs: EnergyPreferences) => boolean;
export interface EnergyCardCatalogEntry {
    /** Stable identifier and storage token: `<view>.<cardType>`. */
    key: string;
    view: EnergyViewPath;
    /** Localize key for the label shown in the customise dialog. */
    labelKey: LocalizeKeys;
    /** Whether this card is emitted for the given preferences. */
    isApplicable: (prefs: EnergyPreferences) => boolean;
}
export declare const energyCardKey: (view: EnergyViewPath, cardType: string) => string;
export declare const ENERGY_CARD_CATALOG: readonly EnergyCardCatalogEntry[];
/** The catalog entry for a `(view, cardType)` pair, or undefined if unknown. */
export declare const energyCardEntry: (view: EnergyViewPath, cardType: string) => EnergyCardCatalogEntry | undefined;
export declare const isEnergyCardHidden: (view: EnergyViewPath, cardType: string, hidden: string[] | undefined) => boolean;
/**
 * Single source of truth for whether a view strategy should emit a card: the
 * card must be in the catalog, apply to the current preferences, and not be
 * hidden by the user. Strategies call this instead of re-deriving the
 * applicability conditions inline, so the catalog and the strategies can never
 * disagree on what "applicable" means.
 */
export declare const isEnergyCardVisible: (view: EnergyViewPath, cardType: string, prefs: EnergyPreferences, hidden: string[] | undefined) => boolean;
/** Keys of all catalog cards that apply to the given preferences for a view. */
export declare const applicableEnergyCardKeys: (view: EnergyViewPath, prefs: EnergyPreferences) => string[];
/** True when a view has applicable cards but every one of them is hidden. */
export declare const isEnergyViewEmpty: (view: EnergyViewPath, prefs: EnergyPreferences, hidden: string[] | undefined) => boolean;
