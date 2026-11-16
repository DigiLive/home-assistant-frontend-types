import type { PowerConfig } from "../../../../data/energy";
export type PowerType = "none" | "standard" | "inverted" | "two_sensors";
/**
 * Extracts the power type from a PowerConfig object.
 */
export declare function getPowerTypeFromConfig(powerConfig?: PowerConfig, statRate?: string): PowerType;
/**
 * Creates an initial PowerConfig from existing config or legacy stat_rate.
 */
export declare function getInitialPowerConfig(powerConfig?: PowerConfig, statRate?: string): PowerConfig;
/**
 * Checks that the power config is complete for the selected power type.
 */
export declare function isPowerConfigValid(powerType: PowerType, powerConfig: PowerConfig): boolean;
/**
 * Builds an exclude list for power statistics from existing sources.
 */
export declare function buildPowerExcludeList(sources: {
    stat_rate?: string;
    power_config?: PowerConfig;
}[], currentPowerConfig: PowerConfig, currentStatRate?: string): string[];
/**
 * Returns the entity id of the power sensor the backend generated for a saved
 * source, if any. Inverted and two sensor configs get such a helper, its entity
 * id is stored in `stat_rate`. Returns nothing while the config differs from the
 * saved one, as the helper doesn't match the edited config yet.
 */
export declare function getPowerHelperEntityId(source: {
    stat_rate?: string;
    power_config?: PowerConfig;
} | undefined, currentPowerConfig: PowerConfig): string | undefined;
