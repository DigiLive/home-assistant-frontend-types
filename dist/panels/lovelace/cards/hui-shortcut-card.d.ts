import { LitElement, nothing, type PropertyValues } from "lit";
import "../../../components/ha-card";
import "../../../components/tile/ha-tile-container";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-info";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { ShortcutCardConfig } from "./types";
export declare class HuiShortcutCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): ShortcutCardConfig;
    layout?: string;
    private _config?;
    private _localize;
    private _navInfo;
    private _serviceInfo;
    setConfig(config: ShortcutCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    protected willUpdate(changedProps: PropertyValues): void;
    private _handleAction;
    private get _hasCardAction();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-shortcut-card": HuiShortcutCard;
    }
}
