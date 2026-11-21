import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-svg-icon";
import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiBadge } from "../badges/hui-badge";
import "../badges/hui-view-badges";
import type { HuiCard } from "../cards/hui-card";
import type { LovelacePath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare class MasonryView extends LitElement implements LovelaceViewElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    narrow: boolean;
    path?: LovelacePath;
    isStrategy: boolean;
    cards: HuiCard[];
    badges: HuiBadge[];
    private _columns?;
    private _createColumnsIteration;
    private _mqls?;
    private _mqlListenerRef?;
    private _resolveInitialRender?;
    initialRenderComplete: Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setConfig(_config: LovelaceViewConfig): void;
    protected render(): TemplateResult;
    private _initMqls;
    private get mqls();
    willUpdate(changedProperties: PropertyValues<this>): void;
    private _addCard;
    private _createRootElement;
    private _createColumns;
    private _addCardToColumn;
    private _updateColumns;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-masonry-view": MasonryView;
    }
}
