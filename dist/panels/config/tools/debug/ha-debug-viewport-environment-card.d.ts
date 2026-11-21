import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-code-editor";
import type { HomeAssistant } from "../../../../types";
export declare class HaDebugViewportEnvironmentCard extends LitElement {
    hass: HomeAssistant;
    private _snapshot;
    private _raf;
    private readonly _boundRefresh;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-debug-viewport-environment-card": HaDebugViewportEnvironmentCard;
    }
}
