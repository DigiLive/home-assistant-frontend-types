/**
 * Detect the direction of text: left-to-right, right-to-left, or neutral
 *
 * @param {string} value
 * @returns {'rtl'|'ltr'|'neutral'}
 */
export declare function estimateDirection(value: string): "ltr" | "neutral" | "rtl";
