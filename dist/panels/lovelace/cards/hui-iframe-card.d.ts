import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { IframeCardConfig } from "./types";
export declare class HuiIframeCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): IframeCardConfig;
    layout?: string;
    protected _config?: IframeCardConfig;
    private _localize;
    getCardSize(): number;
    setConfig(config: IframeCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    getGridOptions(): LovelaceGridOptions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-iframe-card": HuiIframeCard;
    }
}
