import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { ClockCardConfig } from "./types";
export declare class HuiClockCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): ClockCardConfig;
    private _config?;
    setConfig(config: ClockCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-clock-card": HuiClockCard;
    }
}
