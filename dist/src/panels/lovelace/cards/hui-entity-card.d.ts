import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attribute-value";
import "../../../components/ha-card";
import "../../../components/ha-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { EntityCardConfig } from "./types";
export declare class HuiEntityCard extends LitElement implements LovelaceCard {
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): {
        entity: string;
    };
    static getConfigForm(): Promise<import("../types").LovelaceConfigForm>;
    hass?: HomeAssistant;
    layout?: string;
    private _config?;
    private _footerElement?;
    protected _getStateColor(stateObj: HassEntity, config: EntityCardConfig): boolean;
    setConfig(config: EntityCardConfig): void;
    getCardSize(): Promise<number>;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderValueWithUnit;
    protected _computeColor(stateObj: HassEntity, color?: string): string | undefined;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    protected updated(changedProps: PropertyValues): void;
    private _handleAction;
    getGridOptions(): LovelaceGridOptions;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-card": HuiEntityCard;
    }
}
