import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../components/ha-card";
import "../../components/ha-dropdown";
import "../../components/ha-dropdown-item";
import "../../components/ha-icon-button";
import "../../components/item/ha-list-item-base";
import "../../components/list/ha-list-base";
import type { RefreshToken } from "../../data/refresh_token";
import type { HomeAssistant } from "../../types";
declare class HaRefreshTokens extends LitElement {
    hass: HomeAssistant;
    refreshTokens?: RefreshToken[];
    private _refreshTokens;
    private _formatTokenName;
    protected render(): TemplateResult;
    private _handleDropdownSelect;
    private _toggleTokenExpiration;
    private _deleteToken;
    private _deleteAllTokens;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-refresh-tokens-card": HaRefreshTokens;
    }
}
export {};
