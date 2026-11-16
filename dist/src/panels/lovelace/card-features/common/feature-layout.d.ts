import type { LovelaceCardFeatureConfig, LovelaceCardFeaturePosition } from "../types";
export interface CardFeatureLayout {
    inline: LovelaceCardFeatureConfig[];
    below: LovelaceCardFeatureConfig[];
    /** Columns filled by the below features, 0 when there are none */
    columns: number;
}
export declare const computeCardFeatureLayout: (features: LovelaceCardFeatureConfig[] | undefined, position: LovelaceCardFeaturePosition) => CardFeatureLayout;
export declare const computeCardFeatureRows: (features: LovelaceCardFeatureConfig[] | undefined, position: LovelaceCardFeaturePosition) => number;
