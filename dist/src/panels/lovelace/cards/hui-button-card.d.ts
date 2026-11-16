import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-ripple";
import type { EntityRegistryDisplayEntry } from "../../../data/entity/entity_registry";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { ButtonCardConfig } from "./types";
export declare const getEntityDefaultButtonAction: (entityId?: string) => "more-info" | "toggle";
export declare class HuiButtonCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): ButtonCardConfig;
    private _formatters;
    private _localize;
    private _hassConfig;
    private _config?;
    private _stateObj?;
    private _themes;
    _entity?: EntityRegistryDisplayEntry;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    setConfig(config: ButtonCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    static get styles(): CSSResultGroup;
    private _computeColor;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-card": HuiButtonCard;
    }
}
