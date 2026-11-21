import type { VisibilityCondition } from "../../../panels/lovelace/common/validate-condition";
import type { LovelaceBadgeConfig } from "./badge";
import type { LovelaceCardConfig } from "./card";
import type { LovelaceStrategyConfig } from "./strategy";
export declare const DEFAULT_SECTION_COLUMN_SPAN = 1;
export declare const DEFAULT_SECTION_BACKGROUND_OPACITY = 50;
export interface LovelaceSectionBackgroundConfig {
    color?: string;
    opacity?: number;
}
export interface LovelaceBaseSectionConfig {
    visibility?: VisibilityCondition[];
    disabled?: boolean;
    column_span?: number;
    row_span?: number;
    background?: boolean | LovelaceSectionBackgroundConfig;
    /**
     * @deprecated Use heading card instead.
     */
    title?: string;
    theme?: string;
}
export interface LovelaceSectionConfig extends LovelaceBaseSectionConfig {
    type?: string;
    cards?: LovelaceCardConfig[];
    badges?: LovelaceBadgeConfig[];
    sections?: LovelaceSectionRawConfig[];
}
export interface LovelaceStrategySectionConfig extends LovelaceBaseSectionConfig {
    strategy: LovelaceStrategyConfig;
}
export type LovelaceSectionRawConfig = LovelaceSectionConfig | LovelaceStrategySectionConfig;
export declare function resolveSectionBackground(background: boolean | LovelaceSectionBackgroundConfig | undefined): LovelaceSectionBackgroundConfig | undefined;
export declare function hasSectionBackground(section: LovelaceBaseSectionConfig): boolean;
export declare function isStrategySection(section: LovelaceSectionRawConfig): section is LovelaceStrategySectionConfig;
