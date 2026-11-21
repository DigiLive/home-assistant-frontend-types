import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import "../../../../components/tile/ha-tile-icon";
import "../../../../components/tile/ha-tile-info";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergyGridBalanceCardConfig } from "../types";
declare class HuiEnergyGridBalanceCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-graph-card-editor").HuiEnergyGraphCardEditor>;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergyGridBalanceCardConfig;
    private _config?;
    private _data?;
    private _i18n;
    constructor();
    getCardSize(): number;
    setConfig(config: EnergyGridBalanceCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-grid-balance-card": HuiEnergyGridBalanceCard;
    }
}
export {};
