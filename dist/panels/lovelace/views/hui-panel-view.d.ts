import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiCard } from "../cards/hui-card";
import type { LovelacePath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare class PanelView extends LitElement implements LovelaceViewElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    path?: LovelacePath;
    isStrategy: boolean;
    cards: HuiCard[];
    private _card?;
    setConfig(_config: LovelaceViewConfig): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _addCard;
    private _createCard;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-panel-view": PanelView;
    }
}
