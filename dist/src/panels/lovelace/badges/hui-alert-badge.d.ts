import { LitElement, nothing } from "lit";
import "../../../components/ha-badge";
import "../../../components/ha-state-icon";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceBadge, LovelaceBadgeEditor } from "../types";
import type { AlertBadgeConfig } from "./types";
export declare const ALERT_BADGE_DEFAULT_CONFIG: Partial<AlertBadgeConfig>;
export declare class HuiAlertBadge extends LitElement implements LovelaceBadge {
    static getConfigElement(): Promise<LovelaceBadgeEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): AlertBadgeConfig;
    static getDefaultConfig(): Partial<AlertBadgeConfig>;
    private _config?;
    private _stateObj?;
    private _formatters;
    private _localize;
    setConfig(config: AlertBadgeConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-alert-badge": HuiAlertBadge;
    }
}
