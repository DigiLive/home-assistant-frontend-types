import { LitElement } from "lit";
import "../../../layouts/hass-subpage";
import "./ai-task-pref";
import "./mcp-pref";
import type { HomeAssistant } from "../../../types";
declare class HaConfigSectionAI extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    connectedCallback(): void;
    private _scrollToSection;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-ai": HaConfigSectionAI;
    }
}
export {};
