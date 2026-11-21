import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/animation/ha-fade-in";
import "../components/ha-top-app-bar-fixed";
import "../components/ha-spinner";
import type { HomeAssistant } from "../types";
declare class HassLoadingScreen extends LitElement {
    hass?: HomeAssistant;
    noToolbar: boolean;
    rootnav: boolean;
    narrow: boolean;
    message?: string;
    protected render(): TemplateResult;
    private _renderContent;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hass-loading-screen": HassLoadingScreen;
    }
}
export {};
