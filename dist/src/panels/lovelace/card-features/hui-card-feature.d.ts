import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeatureConfig, LovelaceCardFeatureContext, LovelaceCardFeaturePosition } from "./types";
export declare class HuiCardFeature extends LitElement {
    hass: HomeAssistant;
    context: LovelaceCardFeatureContext;
    feature?: LovelaceCardFeatureConfig;
    color?: string;
    position?: LovelaceCardFeaturePosition;
    private _element?;
    private _getFeatureElement;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-feature": HuiCardFeature;
    }
}
