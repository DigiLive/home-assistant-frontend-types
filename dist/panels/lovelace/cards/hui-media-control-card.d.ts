import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-slider";
import "../../../components/ha-state-icon";
import type { HomeAssistant } from "../../../types";
import "../components/hui-marquee";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { MediaControlCardConfig } from "./types";
export declare class HuiMediaControlCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): MediaControlCardConfig;
    private _config?;
    private _stateObj?;
    private _localize;
    private _formatters;
    private _hassConfig;
    private _hassUrl;
    private _themes;
    private _api;
    private _foregroundColor?;
    private _backgroundColor?;
    private _narrow;
    private _veryNarrow;
    private _cardHeight;
    private _progressBar?;
    private _marqueeActive;
    private _progressController;
    private _resizeObserver?;
    getCardSize(): number;
    setConfig(config: MediaControlCardConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    protected update(changedProps: PropertyValues): void;
    private _updateColors;
    protected updated(changedProps: PropertyValues): void;
    private get _image();
    private get _showProgressBar();
    private _measureCard;
    private _attachObserver;
    private _handleMoreInfo;
    private _handleBrowseMedia;
    private _handleJoinMediaPlayers;
    private _handleClick;
    private _handleSeek;
    private _setColors;
    private _marqueeMouseOver;
    private _marqueeMouseLeave;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-control-card": HuiMediaControlCard;
    }
}
