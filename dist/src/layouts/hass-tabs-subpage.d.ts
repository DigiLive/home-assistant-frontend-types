import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/ha-icon-button-arrow-prev";
import "../components/ha-menu-button";
import "../components/ha-svg-icon";
import "../components/ha-tab";
import type { HomeAssistant, Route } from "../types";
export interface PageNavigation {
    path: string;
    translationKey?: string;
    component?: string | string[];
    name?: string;
    core?: boolean;
    /** Hide from non-admin users in filtered navigation and quick bar. */
    adminOnly?: boolean;
    iconPath?: string;
    iconSecondaryPath?: string;
    iconViewBox?: string;
    description?: string;
    iconColor?: string;
    badge?: string;
    info?: any;
    filter?: (hass: Pick<HomeAssistant, "entities">) => boolean;
}
export declare class HassTabsSubpage extends LitElement {
    hass?: HomeAssistant;
    backPath?: string;
    backCallback?: () => void;
    mainPage: boolean;
    route: Route;
    tabs: PageNavigation[];
    private _narrow;
    private _hassConfig;
    private _entities;
    private _i18n;
    isWide: boolean;
    pane: boolean;
    /**
     * Do we need to add padding for a fab.
     * @type {Boolean}
     */
    hasFab: boolean;
    /**
     * Whether tabs are shown (2 or more tabs visible).
     * When both, show-tabs and narrow are true, tabs are shown as bottom bar.
     * @type {Boolean}
     */
    showTabs: boolean;
    private _activeTab?;
    private _hasCustomHeader;
    private _hasCustomToolbar;
    private _content?;
    private _savedScrollPos?;
    private _getTabs;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _saveScrollPos;
    focusContentScroller(): void;
    private _headerSlotChanged;
    private _toolbarSlotChanged;
    private _tabName;
    private _backTapped;
    private _isActiveTabPath;
    private _tabClicked;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hass-tabs-subpage": HassTabsSubpage;
    }
}
