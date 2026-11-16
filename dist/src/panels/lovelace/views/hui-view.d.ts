import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { HASSDomEvent } from "../../../common/dom/fire_event";
import "../../../components/ha-svg-icon";
import type { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../types";
import "../badges/hui-badge";
import type { HuiBadge } from "../badges/hui-badge";
import "../cards/hui-card";
import { type DeleteBadgeParams } from "../editor/delete-badge";
import { type DeleteCardParams } from "../editor/delete-card";
import type { LovelacePath } from "../editor/lovelace-path";
import "../sections/hui-section";
import type { HuiSection } from "../sections/hui-section";
import type { Lovelace } from "../types";
declare global {
    interface HASSDomEvents {
        "ll-create-card": {
            path: LovelacePath;
            suggested?: string[];
        };
        "ll-edit-card": {
            path: LovelacePath;
        };
        "ll-delete-card": DeleteCardParams;
        "ll-duplicate-card": {
            path: LovelacePath;
        };
        "ll-copy-card": {
            path: LovelacePath;
        };
        "ll-cut-card": {
            path: LovelacePath;
        };
        "ll-paste-card": {
            path: LovelacePath;
        };
        "ll-create-badge": {
            path: LovelacePath;
        };
        "ll-edit-badge": {
            path: LovelacePath;
        };
        "ll-delete-badge": DeleteBadgeParams;
        "ll-copy-badge": {
            path: LovelacePath;
        };
        "ll-cut-badge": {
            path: LovelacePath;
        };
    }
    interface HTMLElementEventMap {
        "ll-create-card": HASSDomEvent<HASSDomEvents["ll-create-card"]>;
        "ll-edit-card": HASSDomEvent<HASSDomEvents["ll-edit-card"]>;
        "ll-delete-card": HASSDomEvent<HASSDomEvents["ll-delete-card"]>;
        "ll-duplicate-card": HASSDomEvent<HASSDomEvents["ll-duplicate-card"]>;
        "ll-copy-card": HASSDomEvent<HASSDomEvents["ll-copy-card"]>;
        "ll-cut-card": HASSDomEvent<HASSDomEvents["ll-cut-card"]>;
        "ll-paste-card": HASSDomEvent<HASSDomEvents["ll-paste-card"]>;
        "ll-create-badge": HASSDomEvent<HASSDomEvents["ll-create-badge"]>;
        "ll-edit-badge": HASSDomEvent<HASSDomEvents["ll-edit-badge"]>;
        "ll-delete-badge": HASSDomEvent<HASSDomEvents["ll-delete-badge"]>;
        "ll-copy-badge": HASSDomEvent<HASSDomEvents["ll-copy-badge"]>;
        "ll-cut-badge": HASSDomEvent<HASSDomEvents["ll-cut-badge"]>;
    }
}
export declare class HUIView extends ReactiveElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    narrow: boolean;
    index: number;
    private _cards;
    private _badges;
    private _sections;
    private _layoutElementType?;
    private _layoutElement?;
    private _config?;
    private _resolveInitialRender?;
    private _initialRenderComplete;
    private _registerChildPanelReady?;
    private _path;
    protected _clipboard?: LovelaceCardConfig;
    protected _badgeClipboard?: LovelaceBadgeConfig;
    constructor();
    private _getCardClipboardParams;
    private _getBadgeClipboardParams;
    private _getCardConfig;
    private _createCardElement;
    createBadgeElement(badgeConfig: LovelaceBadgeConfig): HuiBadge;
    createSectionElement(sectionConfig: LovelaceSectionConfig): HuiSection;
    protected createRenderRoot(): this;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private _debounceRefreshConfig;
    protected update(changedProperties: PropertyValues): void;
    private _generateConfig;
    private _setConfig;
    private _initializeConfig;
    private _createLayoutElement;
    private _createBadges;
    private _createCards;
    private _createSections;
    private _rebuildSection;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view": HUIView;
    }
}
