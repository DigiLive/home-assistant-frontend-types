import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, BarGaugeCardFeatureConfig } from "./types";
export declare const supportsBarGaugeCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiBarGaugeCardFeature extends LitElement implements LovelaceCardFeature {
    context: LovelaceCardFeatureContext;
    private _stateObj?;
    private _config?;
    static getStubConfig(): BarGaugeCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: BarGaugeCardFeatureConfig): void;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-bar-gauge-card-feature": HuiBarGaugeCardFeature;
    }
}
export {};
