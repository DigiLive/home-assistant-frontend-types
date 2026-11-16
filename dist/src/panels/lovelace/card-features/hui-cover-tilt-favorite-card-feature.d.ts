import type { CoverEntity } from "../../../data/cover";
import type { HomeAssistant } from "../../../types";
import { HuiNumericFavoriteCardFeatureBase, type NumericFavoriteCardFeatureDefinition } from "./hui-numeric-favorite-card-feature-base";
import type { CoverTiltFavoriteCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
import { getMoreInfoHintCardFeatureEditor } from "./get-more-info-hint-card-feature-editor";
export declare const supportsCoverTiltFavoriteCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiCoverTiltFavoriteCardFeature extends HuiNumericFavoriteCardFeatureBase<CoverEntity, CoverTiltFavoriteCardFeatureConfig> {
    protected get _definition(): NumericFavoriteCardFeatureDefinition<CoverEntity>;
    static getStubConfig(): CoverTiltFavoriteCardFeatureConfig;
    static getConfigElement: typeof getMoreInfoHintCardFeatureEditor;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-tilt-favorite-card-feature": HuiCoverTiltFavoriteCardFeature;
    }
}
export {};
