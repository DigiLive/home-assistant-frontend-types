import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/animation/ha-fade-in";
import "../../../components/ha-card";
import "../../../components/ha-spinner";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { LovelaceCard } from "../types";
export declare class HuiStartingCard extends LitElement implements LovelaceCard {
    private _localize;
    private _hassConfig?;
    getCardSize(): number;
    setConfig(_config: LovelaceCardConfig): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-starting-card": HuiStartingCard;
    }
}
