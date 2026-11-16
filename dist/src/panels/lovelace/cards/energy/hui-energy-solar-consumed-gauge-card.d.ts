import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-gauge";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergySolarGaugeCardConfig } from "../types";
declare class HuiEnergySolarGaugeCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-graph-card-editor").HuiEnergyGraphCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergySolarGaugeCardConfig;
    private _data?;
    private _i18n;
    constructor();
    getCardSize(): number;
    setConfig(config: EnergySolarGaugeCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeSeverity;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-solar-consumed-gauge-card": HuiEnergySolarGaugeCard;
    }
}
export {};
