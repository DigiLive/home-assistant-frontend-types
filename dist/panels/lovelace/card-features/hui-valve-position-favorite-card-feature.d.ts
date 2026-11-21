import type { HomeAssistant } from "../../../types";
import type { ValveEntity } from "../../../data/valve";
import { HuiNumericFavoriteCardFeatureBase, type NumericFavoriteCardFeatureDefinition } from "./hui-numeric-favorite-card-feature-base";
import type { LovelaceCardFeatureContext, ValvePositionFavoriteCardFeatureConfig } from "./types";
import { getMoreInfoHintCardFeatureEditor } from "./get-more-info-hint-card-feature-editor";
export declare const supportsValvePositionFavoriteCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiValvePositionFavoriteCardFeature extends HuiNumericFavoriteCardFeatureBase<ValveEntity, ValvePositionFavoriteCardFeatureConfig> {
    protected get _definition(): NumericFavoriteCardFeatureDefinition<ValveEntity>;
    static getStubConfig(): ValvePositionFavoriteCardFeatureConfig;
    static getConfigElement: typeof getMoreInfoHintCardFeatureEditor;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-valve-position-favorite-card-feature": HuiValvePositionFavoriteCardFeature;
    }
}
export {};
