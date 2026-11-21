import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import "../components/hui-warning-element";
import type { LovelacePictureElementEditor } from "../types";
import type { LovelaceElement, LovelaceElementHitInfo, StateLabelElementConfig } from "./types";
declare class HuiStateLabelElement extends LitElement implements LovelaceElement {
    static getConfigElement(): Promise<LovelacePictureElementEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): StateLabelElementConfig;
    hass?: HomeAssistant;
    delegatedActions: boolean;
    private _config?;
    private _content?;
    constructor();
    setConfig(config: StateLabelElementConfig): void;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    getHitInfo(): LovelaceElementHitInfo | null;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-label-element": HuiStateLabelElement;
    }
}
export {};
