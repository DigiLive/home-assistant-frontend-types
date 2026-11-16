import type { HuiSection } from "../sections/hui-section";
/**
 * Determines which sections without a background need vertical margin
 * to align with adjacent sections that have a background (and padding).
 *
 * Simulates CSS grid row placement by accumulating column spans.
 * For each row, if any section has a background, the sections without
 * a background in that row need margin to compensate for the padding
 * added by the background.
 */
export declare function computeSectionsBackgroundAlignment(sections: HuiSection[], columnCount: number): Set<number>;
