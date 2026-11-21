import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergySourcesTableCardConfig } from "../types";
export declare class HuiEnergySourcesTableCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-sources-table-card-editor").HuiEnergySourcesTableCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergySourcesTableCardConfig;
    private _data?;
    private _i18n;
    private _hassConfig;
    private _themes;
    private _formatEntityName;
    private _states;
    private _gasUnits?;
    private _gasDisplayPrecisions?;
    constructor();
    getCardSize(): Promise<number> | number;
    setConfig(config: EnergySourcesTableCardConfig): void;
    protected _renderRow(computedStyles: CSSStyleDeclaration, type: string, statId: string, idx: number, energy: number, compareEnergy: number, energyUnit: string, cost: number | null, compareCost: number | null, showCosts: boolean, compare: boolean, name?: string): import("lit-html").TemplateResult<1>;
    protected _renderTotalRow(label: string, energy: number | null, compareEnergy: number | null, energyUnit: string, cost: number | null, compareCost: number | null, showCosts: boolean, compare: boolean, bulletColor?: {
        border: string;
        background: string;
    }, isFinalTotal?: boolean, formatOptions?: Intl.NumberFormatOptions): import("lit-html").TemplateResult<1>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleMoreInfo;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-sources-table-card": HuiEnergySourcesTableCard;
    }
}
