import type { HassEntity } from "home-assistant-js-websocket";
import type { RelatedIdSets } from "../../common/search/related-context";
import type { PickerComboBoxItem } from "../../components/ha-picker-combo-box";
import type { FuseWeightedKey } from "../../resources/fuseMultiTerm";
import type { HomeAssistant } from "../../types";
import type { HaEntityPickerEntityFilterFunc } from "./entity";
export interface EntityComboBoxItem extends PickerComboBoxItem {
    domain_name?: string;
    stateObj?: HassEntity;
    relatedRank?: number;
}
export declare const entityComboBoxKeys: FuseWeightedKey[];
export interface GetEntitiesOptions {
    includeDomains?: string[];
    excludeDomains?: string[];
    entityFilter?: HaEntityPickerEntityFilterFunc;
    includeDeviceClasses?: string[];
    includeUnitOfMeasurement?: string[];
    includeEntities?: string[];
    excludeEntities?: string[];
    value?: string;
    idPrefix?: string;
}
export declare const getEntities: (hass: Pick<HomeAssistant, "states" | "entities" | "devices" | "areas" | "floors" | "language" | "translationMetadata" | "localize">, options?: GetEntitiesOptions) => EntityComboBoxItem[];
/**
 * Annotate entity items with their closeness to the related context, so they
 * can be floated to the top. The entity itself ranks closest, then its device,
 * then its area; anything unrelated keeps the lowest rank.
 */
export declare const markEntitiesRelated: (items: EntityComboBoxItem[], related: RelatedIdSets, entities: HomeAssistant["entities"], devices: HomeAssistant["devices"]) => EntityComboBoxItem[];
/**
 * Sort entity items by related closeness (entity, then device, then area, then
 * the rest). Pass `language` to break ties within a tier alphabetically by
 * label; omit it to keep the incoming order (e.g. search relevance).
 */
export declare const sortEntitiesByRelatedRank: (items: EntityComboBoxItem[], language?: string) => EntityComboBoxItem[];
