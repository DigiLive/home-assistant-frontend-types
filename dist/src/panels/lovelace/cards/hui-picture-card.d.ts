import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { EntityRegistryDisplayEntry } from "../../../data/entity/entity_registry";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { PictureCardConfig } from "./types";
export declare class HuiPictureCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): PictureCardConfig;
    private _config?;
    private _resolvedImage?;
    private _stateObj?;
    _entity?: EntityRegistryDisplayEntry;
    private _localize;
    private _formatters;
    private _hassConfig;
    private _hassUrl;
    private _themes;
    private _api?;
    private _resolvingImage?;
    private _reconnectImg;
    private _img?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    getCardSize(): number;
    setConfig(config: PictureCardConfig): void;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-card": HuiPictureCard;
    }
}
