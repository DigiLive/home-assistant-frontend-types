import { LitElement, nothing, type PropertyValues } from "lit";
import "../../../components/ha-badge";
import "../../../components/ha-icon";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceBadge, LovelaceBadgeEditor } from "../types";
import type { ShortcutBadgeConfig } from "./types";
export declare class HuiShortcutBadge extends LitElement implements LovelaceBadge {
    static getConfigElement(): Promise<LovelaceBadgeEditor>;
    static getStubConfig(): ShortcutBadgeConfig;
    hass?: HomeAssistant;
    private _config?;
    private _navInfo;
    private _serviceInfo;
    setConfig(config: ShortcutBadgeConfig): void;
    protected willUpdate(changedProps: PropertyValues): void;
    private _handleAction;
    private get _hasAction();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-shortcut-badge": HuiShortcutBadge;
    }
}
