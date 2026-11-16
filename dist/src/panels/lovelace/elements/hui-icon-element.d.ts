import { LitElement, nothing } from "lit";
import "../../../components/ha-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelacePictureElementEditor } from "../types";
import type { IconElementConfig, LovelaceElement, LovelaceElementHitInfo } from "./types";
export declare class HuiIconElement extends LitElement implements LovelaceElement {
    static getConfigElement(): Promise<LovelacePictureElementEditor>;
    static getStubConfig(): IconElementConfig;
    hass?: HomeAssistant;
    delegatedActions: boolean;
    private _config?;
    constructor();
    setConfig(config: IconElementConfig): void;
    getHitInfo(): LovelaceElementHitInfo | null;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-icon-element": HuiIconElement;
    }
}
