import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergyDistributionCardConfig } from "../types";
declare class HuiEnergyDistrubutionCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-graph-card-editor").HuiEnergyGraphCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergyDistributionCardConfig;
    private _data?;
    private _reducedMotion;
    private _i18n;
    private _locationName?;
    private _hasEnergyPanel?;
    private _entityStates?;
    private _gasUnits?;
    private _gasDisplayPrecisions?;
    constructor();
    setConfig(config: EnergyDistributionCardConfig): void;
    private get _energyDashboardHref();
    getCardSize(): Promise<number> | number;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-distribution-card": HuiEnergyDistrubutionCard;
    }
}
export {};
