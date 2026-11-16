import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/tile/ha-tile-container";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-info";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { DiscoveredDevicesCardConfig } from "./types";
export declare class HuiDiscoveredDevicesCard extends LitElement implements LovelaceCard {
    connectedWhileHidden: boolean;
    private _config?;
    private _discoveredFlows?;
    private _i18n;
    private _user?;
    constructor();
    private _handleFlowMessages;
    setConfig(config: DiscoveredDevicesCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _handleAction;
    private get _hasCardAction();
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult | typeof nothing;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-discovered-devices-card": HuiDiscoveredDevicesCard;
    }
}
