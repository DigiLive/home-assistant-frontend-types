import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-button";
import "../../../components/ha-icon";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { EmptyStateCardConfig } from "./types";
export declare class HuiEmptyStateCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): EmptyStateCardConfig;
    private _config?;
    getCardSize(): number;
    setConfig(config: EmptyStateCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleButtonAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-empty-state-card": HuiEmptyStateCard;
    }
}
