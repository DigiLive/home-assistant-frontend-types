import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { DateCardConfig } from "./types";
export declare class HuiDateCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): DateCardConfig;
    private _locale?;
    private _hassConfig?;
    private _config?;
    private _dateText?;
    private _midnightTimer?;
    setConfig(config: DateCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleVisibilityChange;
    protected willUpdate(changedProps: PropertyValues): void;
    private _clearMidnightTimer;
    private _scheduleMidnightRefresh;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-date-card": HuiDateCard;
    }
}
