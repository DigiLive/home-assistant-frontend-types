import { type LovelaceSectionConfig, type LovelaceSectionRawConfig, type LovelaceStrategySectionConfig } from "../../../data/lovelace/config/section";
import type { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
import type { LovelaceConfig, LovelaceDashboardStrategyConfig, LovelaceRawConfig } from "../../../data/lovelace/config/types";
import type { LovelaceStrategyViewConfig, LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { LovelaceDashboardSuggestions } from "../../../data/lovelace/dashboard";
import type { HomeAssistant } from "../../../types";
import type { LovelaceDashboardStrategy, LovelaceStrategy } from "./types";
export type LovelaceStrategyConfigType = "dashboard" | "view" | "section";
export declare const getLovelaceStrategy: <T extends LovelaceStrategyConfigType>(configType: T, strategyType: string) => Promise<LovelaceStrategy>;
export declare const generateLovelaceDashboardStrategy: (config: LovelaceDashboardStrategyConfig, hass: HomeAssistant) => Promise<LovelaceConfig>;
export declare const generateLovelaceViewStrategy: (config: LovelaceStrategyViewConfig, hass: HomeAssistant) => Promise<LovelaceViewConfig>;
export declare const generateLovelaceSectionStrategy: (config: LovelaceStrategySectionConfig, hass: HomeAssistant, throwOnError?: boolean) => Promise<LovelaceSectionConfig>;
/**
 * Synchronously checks whether a strategy needs regeneration.
 * Strategies can implement `shouldRegenerate` for custom logic or declare
 * `registryDependencies` to opt in to the default reference-equality check.
 * The default list (entities, devices, areas, floors) is used when neither is
 * provided, preserving the previous behavior for third-party strategies.
 */
export declare const checkStrategyShouldRegenerate: (configType: LovelaceStrategyConfigType, strategyConfig: LovelaceStrategyConfig, oldHass: HomeAssistant, newHass: HomeAssistant) => boolean;
export declare const expandLovelaceSectionStrategies: (section: LovelaceSectionRawConfig, hass: HomeAssistant, throwOnError?: boolean) => Promise<LovelaceSectionConfig>;
/**
 * Find all references to strategies and replaces them with the generated output
 */
export declare const expandLovelaceConfigStrategies: (config: LovelaceRawConfig, hass: HomeAssistant) => Promise<LovelaceConfig>;
/** Loads a dashboard strategy and any optional create-dialog field suggestions. */
export declare function loadDashboardStrategyWithCreateSuggestions(hass: HomeAssistant, strategyType: string): Promise<{
    strategyClass: LovelaceDashboardStrategy;
    fieldSuggestions: LovelaceDashboardSuggestions | undefined;
}>;
