import { ReactiveElement } from "lit";
import type { LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../../types";
import type { HeadingCardConfig } from "../../cards/types";
import type { Condition } from "../../common/validate-condition";
import type { LovelaceStrategyDependency, LovelaceStrategyEditor } from "../types";
export interface CommonControlsSectionStrategyConfig {
    type: "common-controls";
    limit?: number;
    exclude_entities?: string[];
    include_entities?: string[];
    hide_empty?: boolean;
    heading?: HeadingCardConfig;
    /** @deprecated Use `heading` instead */
    icon?: string;
    /** @deprecated Use `heading` instead */
    title?: string;
    /** @deprecated Use `heading` instead */
    title_visibilty?: Condition[];
}
export declare class CommonControlsSectionStrategy extends ReactiveElement {
    static registryDependencies: readonly LovelaceStrategyDependency[];
    static getConfigElement(): Promise<LovelaceStrategyEditor>;
    static getStubConfig(): CommonControlsSectionStrategyConfig;
    static generate(config: CommonControlsSectionStrategyConfig, hass: HomeAssistant): Promise<LovelaceSectionConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "common-controls-section-strategy": CommonControlsSectionStrategy;
    }
}
