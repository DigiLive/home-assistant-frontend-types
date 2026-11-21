import { ReactiveElement } from "lit";
import type { EntityNameItem } from "../../../../common/entity/entity_name_config";
import type { LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
import type { HassServiceTargetWithExclude } from "../../../../data/target";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceStrategyDependency, LovelaceStrategyEditor } from "../types";
export declare const ENTITIES_SECTION_GROUPS: readonly ["none", "area", "floor", "type"];
export type EntitiesSectionGroup = (typeof ENTITIES_SECTION_GROUPS)[number];
export interface EntitiesSectionStrategyConfig {
    type: "entities";
    title?: string;
    target?: HassServiceTargetWithExclude;
    entity_types?: string[];
    include_config_and_diagnostic?: boolean;
    group_by?: EntitiesSectionGroup;
    name?: "" | EntityNameItem | EntityNameItem[];
}
export declare class EntitiesSectionStrategy extends ReactiveElement {
    static registryDependencies: readonly LovelaceStrategyDependency[];
    static getConfigElement(): Promise<LovelaceStrategyEditor>;
    static getStubConfig(hass: HomeAssistant): EntitiesSectionStrategyConfig;
    static generate(config: EntitiesSectionStrategyConfig, hass: HomeAssistant): Promise<LovelaceSectionConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "entities-section-strategy": EntitiesSectionStrategy;
    }
}
