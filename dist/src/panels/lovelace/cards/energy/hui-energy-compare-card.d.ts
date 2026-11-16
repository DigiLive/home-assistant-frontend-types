import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergyCardBaseConfig } from "../types";
import "../../../../components/ha-alert";
export declare class HuiEnergyCompareCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-graph-card-editor").HuiEnergyGraphCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergyCardBaseConfig;
    private _start?;
    private _end?;
    private _startCompare?;
    private _endCompare?;
    private _compareMode?;
    private _i18n;
    private _hassConfig;
    hidden: boolean;
    preview: boolean;
    connectedWhileHidden: boolean;
    getCardSize(): Promise<number> | number;
    setConfig(config: EnergyCardBaseConfig): void;
    private _energyCollection;
    protected update(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _changeCompareMode;
    private _update;
    private _checkVisibility;
    private _stopCompare;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-compare-card": HuiEnergyCompareCard;
    }
}
