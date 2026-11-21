import type { HassServiceTarget } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-icon-next";
import "../../../components/ha-tooltip";
import type { HomeAssistant } from "../../../types";
import "../../logbook/ha-logbook";
import "../components/hui-warning";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { LogbookCardConfig } from "./types";
export declare const DEFAULT_HOURS_TO_SHOW = 24;
export declare class HuiLogbookCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): {
        target: {
            entity_id: string[];
        };
    };
    hass: HomeAssistant;
    layout?: string;
    private _config?;
    private _time?;
    private _targetPickerValue;
    private _stateFilter?;
    private _compositeSplits?;
    private _loadingCompositeSplits;
    private _showMoreLinkId;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    validateTarget(config: LogbookCardConfig): HassServiceTarget | undefined;
    setConfig(config: LogbookCardConfig): void;
    private _showMoreUrl;
    private _getEntityIds;
    private _getMissingDeviceIds;
    private _getTarget;
    private _getMemoizedTarget;
    private _loadCompositeSplits;
    private _getMemoizedEntityIds;
    private _getNameDetail;
    private _getAutoNameDetail;
    protected update(changedProperties: PropertyValues<this>): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _renderMissingDevicesWarning;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-logbook-card": HuiLogbookCard;
    }
}
