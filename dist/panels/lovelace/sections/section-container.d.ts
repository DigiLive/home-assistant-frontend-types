import { type LovelaceBaseSectionConfig } from "../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../types";
import "./hui-section-background";
export declare const renderSectionContainer: (hass: HomeAssistant, config: LovelaceBaseSectionConfig, section: unknown, alignBackground?: boolean) => import("lit-html").TemplateResult<1>;
export declare const sectionContainerStyles: import("lit").CSSResult;
