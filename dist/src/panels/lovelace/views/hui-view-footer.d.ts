import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-ripple";
import "../../../components/ha-svg-icon";
import { type LovelaceViewFooterConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiCard } from "../cards/hui-card";
import type { LovelacePath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare class HuiViewFooter extends LitElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    card?: HuiCard;
    config?: LovelaceViewFooterConfig;
    path: LovelacePath;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    private _checkHidden;
    private _createCardElement;
    private get _cardPath();
    private _addCard;
    private _configure;
    private _saveFooterConfig;
    private _renderCard;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-footer": HuiViewFooter;
    }
}
