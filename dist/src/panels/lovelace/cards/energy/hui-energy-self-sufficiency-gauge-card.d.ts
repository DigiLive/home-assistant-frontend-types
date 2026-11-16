import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-gauge";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergySelfSufficiencyGaugeCardConfig } from "../types";
declare class HuiEnergySelfSufficiencyGaugeCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-graph-card-editor").HuiEnergyGraphCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergySelfSufficiencyGaugeCardConfig;
    private _data?;
    private _i18n;
    constructor();
    getCardSize(): number;
    setConfig(config: EnergySelfSufficiencyGaugeCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeSeverity;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-self-sufficiency-gauge-card": HuiEnergySelfSufficiencyGaugeCard;
    }
}
export {};
