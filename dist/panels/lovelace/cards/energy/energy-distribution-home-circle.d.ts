/**
 * Home-circle stroke lengths for the energy distribution card.
 *
 * Hourly allocation can produce used_solar + used_battery + used_grid larger
 * than net used_total when some hours export more than they produce. Dividing
 * by net used_total then overflows the circle and the leftover grid arc goes
 * negative, which browsers paint as a solid grid ring.
 *
 * These arcs use the sum of the allocated home flows as the denominator so
 * they always fit the circumference.
 */
export declare const ENERGY_DISTRIBUTION_HOME_CIRCLE_CIRCUMFERENCE = 238.76104;
export interface EnergyDistributionHomeCircleArcs {
    solar?: number;
    battery?: number;
    lowCarbon?: number;
    highCarbon?: number;
    grid?: number;
}
export declare const computeEnergyDistributionHomeCircleArcs: ({ usedSolar, usedBattery, usedGrid, hasSolar, hasGrid, highCarbonConsumption, circumference, }: {
    usedSolar?: number;
    usedBattery?: number;
    usedGrid?: number;
    hasSolar: boolean;
    hasGrid: boolean;
    highCarbonConsumption?: number;
    circumference?: number;
}) => EnergyDistributionHomeCircleArcs;
