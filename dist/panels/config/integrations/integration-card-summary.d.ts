import type { ConfigEntry } from "../../../data/config_entries";
import type { DeviceRegistryEntry } from "../../../data/device/device_registry";
export type IntegrationCardSummaryUnit = "devices" | "services" | "entities" | "entries";
export interface IntegrationCardSummary {
    unit: IntegrationCardSummaryUnit;
    count: number;
    /** Number of config entries needing attention, counted in `entries`. */
    attention: number;
    /**
     * The state shared by all config entries needing attention, or `undefined`
     * when they are in different states.
     */
    attentionState?: ConfigEntry["state"];
}
export type IntegrationCardStatusLevel = "error" | "warning" | "progress";
export declare const CARD_STATE_LEVEL: Partial<Record<ConfigEntry["state"], IntegrationCardStatusLevel>>;
export declare const configEntryNeedsAttention: (entry: ConfigEntry) => boolean;
/**
 * The state the integration card shows for a group of config entries: the
 * most important state of any entry, so the card never looks healthy while
 * one of its entries needs attention.
 */
export declare const computeIntegrationCardState: (entries: ConfigEntry[]) => ConfigEntry["state"];
/**
 * Entries needing attention are always counted as entries, not devices or
 * entities: a failing entry may own none of them, and only entries are what
 * the user retries or reconfigures.
 */
export declare const computeIntegrationCardSummary: (entries: ConfigEntry[], devices: DeviceRegistryEntry[], entityCount: number) => IntegrationCardSummary | undefined;
