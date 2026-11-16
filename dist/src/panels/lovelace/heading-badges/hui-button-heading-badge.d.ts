import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceHeadingBadge, LovelaceHeadingBadgeEditor } from "../types";
import type { ButtonHeadingBadgeConfig } from "./types";
export declare class HuiButtonHeadingBadge extends LitElement implements LovelaceHeadingBadge {
    static getConfigElement(): Promise<LovelaceHeadingBadgeEditor>;
    static getStubConfig(): ButtonHeadingBadgeConfig;
    hass?: HomeAssistant;
    private _config?;
    preview: boolean;
    setConfig(config: ButtonHeadingBadgeConfig): void;
    get hasAction(): boolean;
    private _handleAction;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-heading-badge": HuiButtonHeadingBadge;
    }
}
