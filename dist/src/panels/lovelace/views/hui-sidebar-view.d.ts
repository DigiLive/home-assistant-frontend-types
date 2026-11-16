import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiBadge } from "../badges/hui-badge";
import "../badges/hui-view-badges";
import type { HuiCard } from "../cards/hui-card";
import type { LovelacePath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare class SideBarView extends LitElement implements LovelaceViewElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    path?: LovelacePath;
    isStrategy: boolean;
    cards: HuiCard[];
    badges: HuiBadge[];
    private _config?;
    private _oldMain?;
    private _oldSidebar?;
    private _container?;
    private _mqlListenerRef?;
    private _mql?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setConfig(config: LovelaceViewConfig): void;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _addCard;
    private _createCards;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sidebar-view": SideBarView;
    }
}
