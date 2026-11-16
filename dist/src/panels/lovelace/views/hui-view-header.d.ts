import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-ripple";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import type { LovelaceViewHeaderConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiBadge } from "../badges/hui-badge";
import "../badges/hui-view-badges";
import type { HuiCard } from "../cards/hui-card";
import type { LovelacePath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare const DEFAULT_VIEW_HEADER_LAYOUT = "center";
export declare const DEFAULT_VIEW_HEADER_BADGES_POSITION = "bottom";
export declare const DEFAULT_VIEW_HEADER_BADGES_WRAP = "wrap";
export declare class HuiViewHeader extends LitElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    card?: HuiCard;
    badges: HuiBadge[];
    config?: LovelaceViewHeaderConfig;
    path: LovelacePath;
    private _checkHidden;
    private _badgeVisibilityChanged;
    private _dragScrollController;
    private _badgesScrollFade;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private _createCardElement;
    private _addCard;
    private get _cardPath();
    private _saveHeaderConfig;
    private _configure;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-header": HuiViewHeader;
    }
}
