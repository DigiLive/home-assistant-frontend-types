import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-spinner";
import type { HomeAssistant } from "../../../types";
export declare class MCPPref extends LitElement {
    narrow: boolean;
    hass: HomeAssistant;
    private _entry?;
    private _apis?;
    private _error?;
    private _enabling;
    private _sortedApis;
    protected firstUpdated(): void;
    protected render(): TemplateResult<1>;
    private _renderEnabled;
    private _renderUrlRow;
    private _mcpPath;
    private _load;
    private _enable;
    private _enableEntry;
    private _configure;
    private _disable;
    private _copyUrl;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "mcp-pref": MCPPref;
    }
}
