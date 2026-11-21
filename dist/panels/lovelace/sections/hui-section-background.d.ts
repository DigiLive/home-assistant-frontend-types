import { LitElement } from "lit";
import type { PropertyValues } from "lit";
import { type LovelaceSectionBackgroundConfig } from "../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../types";
export declare class HuiSectionBackground extends LitElement {
    hass?: HomeAssistant;
    background?: boolean | LovelaceSectionBackgroundConfig;
    theme?: string;
    protected render(): symbol;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section-background": HuiSectionBackground;
    }
}
