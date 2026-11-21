import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import "../components/hui-entities-toggle";
import type { EntityConfig, LovelaceRowConfig } from "../entity-rows/types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import { migrateEntitiesCardConfig } from "./migrate-card-config";
import type { EntitiesCardConfig } from "./types";
export declare const computeShowHeaderToggle: <T extends EntityConfig | LovelaceRowConfig>(config: EntitiesCardConfig, entities: T[]) => boolean;
export { migrateEntitiesCardConfig };
declare class HuiEntitiesCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): EntitiesCardConfig;
    private _config?;
    private _rowElements;
    private _entitiesToggle?;
    private _hass?;
    private _configEntities?;
    private _showHeaderToggle?;
    private _headerElement?;
    private _footerElement?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    set hass(hass: HomeAssistant);
    getCardSize(): Promise<number>;
    getGridOptions(): LovelaceGridOptions;
    setConfig(config: EntitiesCardConfig): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | TemplateResult<1>;
    static styles: import("lit").CSSResult[];
    private _rowConfig;
    private _renderEntity;
    private _updateRowVisibility;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entities-card": HuiEntitiesCard;
    }
}
