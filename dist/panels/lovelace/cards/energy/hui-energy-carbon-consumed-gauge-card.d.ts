import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-gauge";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergyCarbonGaugeCardConfig } from "../types";
declare class HuiEnergyCarbonGaugeCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-graph-card-editor").HuiEnergyGraphCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergyCarbonGaugeCardConfig;
    private _data?;
    private _co2State?;
    private _i18n;
    private _hassConfig;
    constructor();
    getCardSize(): number;
    setConfig(config: EnergyCarbonGaugeCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeSeverity;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-carbon-consumed-gauge-card": HuiEnergyCarbonGaugeCard;
    }
}
export {};
