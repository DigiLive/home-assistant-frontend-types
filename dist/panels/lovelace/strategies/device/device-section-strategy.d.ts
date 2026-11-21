import { ReactiveElement } from "lit";
import type { LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceStrategyDependency, LovelaceStrategyEditor } from "../types";
export declare const DEVICE_SECTION_CATEGORIES: readonly ["control", "sensor", "event", "config", "diagnostic"];
export type DeviceSectionCategory = (typeof DEVICE_SECTION_CATEGORIES)[number];
export declare const DEFAULT_DEVICE_SECTION_CATEGORIES: DeviceSectionCategory[];
export declare const DEVICE_SECTION_HEADINGS: readonly ["none", "device", "area"];
export type DeviceSectionHeading = (typeof DEVICE_SECTION_HEADINGS)[number];
export interface DeviceSectionStrategyConfig {
    type: "device";
    device_id?: string;
    categories?: DeviceSectionCategory[];
    display?: "tiles" | "list";
    group_by_category?: boolean;
    heading?: DeviceSectionHeading;
    exclude_entities?: string[];
}
export declare class DeviceSectionStrategy extends ReactiveElement {
    static registryDependencies: readonly LovelaceStrategyDependency[];
    static getConfigElement(): Promise<LovelaceStrategyEditor>;
    static getStubConfig(hass: HomeAssistant): DeviceSectionStrategyConfig;
    static generate(config: DeviceSectionStrategyConfig, hass: HomeAssistant): Promise<LovelaceSectionConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "device-section-strategy": DeviceSectionStrategy;
    }
}
