import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/tile/ha-tile-container";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-info";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { UpdatesCardConfig } from "./types";
export declare class HuiUpdatesCard extends LitElement implements LovelaceCard {
    connectedWhileHidden: boolean;
    private _config?;
    private _i18n;
    private _formatters;
    private _user?;
    private _updateCount?;
    setConfig(config: UpdatesCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _handleAction;
    private get _hasCardAction();
    protected update(changedProps: PropertyValues): void;
    private _updateVisibility;
    protected render(): TemplateResult | typeof nothing;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-updates-card": HuiUpdatesCard;
    }
}
