import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/ha-button";
import "../components/ha-top-app-bar-fixed";
import type { HomeAssistant } from "../types";
import "../components/ha-alert";
declare class HassErrorScreen extends LitElement {
    hass?: HomeAssistant;
    private _localize?;
    toolbar: boolean;
    rootnav: boolean;
    narrow: boolean;
    error?: string;
    showReload: boolean;
    protected render(): TemplateResult;
    private _renderContent;
    private _handleBack;
    private _handleReload;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hass-error-screen": HassErrorScreen;
    }
}
export {};
