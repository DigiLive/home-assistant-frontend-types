import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import type { HomeAssistant } from "../../../../types";
import "../../components/hui-energy-period-selector";
import type { LovelaceCard, LovelaceGridOptions } from "../../types";
import type { EnergyDateSelectorCardConfig } from "../types";
export declare class HuiEnergyDateSelectionCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-date-selection-card-editor").HuiEnergyDateSelectionCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergyDateSelectorCardConfig;
    getCardSize(): Promise<number> | number;
    getGridOptions(): LovelaceGridOptions;
    setConfig(config: EnergyDateSelectorCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-date-selection-card": HuiEnergyDateSelectionCard;
    }
}
