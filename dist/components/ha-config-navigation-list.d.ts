import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-icon-next";
import "./ha-svg-icon";
import "./item/ha-list-item-button";
import "./list/ha-list-nav";
import type { PageNavigation } from "../layouts/hass-tabs-subpage";
declare class HaConfigNavigationList extends LitElement {
    private _config;
    narrow: boolean;
    pages: PageNavigation[];
    hasSecondary: boolean;
    label?: string;
    render(): TemplateResult;
    private _handleExternalApp;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-navigation-list": HaConfigNavigationList;
    }
}
export {};
