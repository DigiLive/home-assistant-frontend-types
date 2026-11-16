/**
 * Normalize a numeric value by detecting SI unit prefixes (T, G, M, k, m, µ).
 * Only applies when the unit is longer than 1 character and starts with a
 * recognized prefix, avoiding false positives on standalone units like "m" (meters).
 */
export declare const normalizeValueBySIPrefix: (value: number, unit: string | undefined) => number;
