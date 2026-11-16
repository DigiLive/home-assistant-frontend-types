import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-gauge";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergyGridNeutralityGaugeCardConfig } from "../types";
declare class HuiEnergyGridGaugeCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-graph-card-editor").HuiEnergyGraphCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergyGridNeutralityGaugeCardConfig;
    private _data?;
    private _i18n;
    constructor();
    getCardSize(): number;
    setConfig(config: EnergyGridNeutralityGaugeCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-grid-neutrality-gauge-card": HuiEnergyGridGaugeCard;
    }
}
export {};
