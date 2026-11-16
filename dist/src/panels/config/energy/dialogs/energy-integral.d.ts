import type { PowerConfig } from "../../../../data/energy";
import type { StatisticsMetaData } from "../../../../data/recorder";
import type { HomeAssistant } from "../../../../types";
import type { PowerType } from "./power-config";
export type IntegralDeviceClass = "energy" | "gas" | "water";
export interface IntegralUnits {
    unit_time: string;
    unit_prefix?: "k";
}
export interface IntegralRequest {
    /** Rate statistic to integrate. */
    rate: string;
    units: IntegralUnits;
    /** Name of the helper, if one is created. */
    name: string;
}
/**
 * Returns the Integral helper units that turn a rate into one of the total
 * units, or undefined when the rate does not integrate to one of them.
 */
export declare function integralUnits(rateUnit: string | undefined, totalUnits: string[]): IntegralUnits | undefined;
export interface PowerIntegral extends Omit<IntegralRequest, "name"> {
    /** Energy statistic the helper provides. */
    energy: "stat_energy_from" | "stat_energy_to";
}
/**
 * Returns the energy statistics of a source that are not set yet and can be
 * calculated from its power sensors. Only a source with two power sensors
 * qualifies, as an Integral helper can't split a signed sensor.
 */
export declare function pendingPowerIntegrals(states: HomeAssistant["states"], source: Partial<Record<PowerIntegral["energy"], string | null>>, powerType: PowerType, powerConfig: PowerConfig, totalUnits: string[]): PowerIntegral[];
/**
 * Returns the unit the Integral helper reports for the rate unit.
 */
export declare function integralTotalUnit(rateUnit: string, units: IntegralUnits): string;
/**
 * Finds an Integral helper that already integrates the rate statistic.
 */
export declare function findIntegral(states: HomeAssistant["states"], entities: HomeAssistant["entities"], rate: string, deviceClass: IntegralDeviceClass, exclude?: string[]): string | undefined;
/**
 * Builds the input for the Integral helper config flow.
 */
export declare function integralFlowInput(name: string, rate: string, units: IntegralUnits, deviceClass: IntegralDeviceClass): {
    unit_time: string;
    unit_prefix?: "k";
    name: string;
    source: string;
    method: string;
    max_sub_interval: {
        hours: number;
        minutes: number;
        seconds: number;
    };
    round: number;
    device_class: IntegralDeviceClass;
};
export interface ConfirmIntegralsOptions {
    deviceClass: IntegralDeviceClass;
    /** Live states and entities, so a retry finds the helpers already created. */
    states: HomeAssistant["states"];
    entities: HomeAssistant["entities"];
    requests: IntegralRequest[];
    /** Why the sensors are needed, shown first. */
    intro: string;
    /** Sensors that are already used elsewhere and can't be reused. */
    exclude?: string[];
    statsMetadata?: Record<string, StatisticsMetaData>;
}
/**
 * Asks to create Integral helpers for the requests, or to use helpers that
 * already integrate the same rates. Returns their entity ids in request order,
 * or undefined when declined.
 */
export declare function confirmIntegrals(element: HTMLElement, hass: HomeAssistant, options: ConfirmIntegralsOptions): Promise<string[] | undefined>;
