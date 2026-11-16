import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-spinner";
import "../../../../components/input/ha-input-search";
import type { LovelaceBadgeConfig } from "../../../../data/lovelace/config/badge";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
/**
 * @element hui-badge-picker
 *
 * @summary Searchable grid of badges to pick from.
 *
 * @slot - Footer below the scrolling badges, e.g. an action bar.
 *
 * @cssprop --ha-badge-picker-content-padding-bottom - Space at the end of the scrolling badges.
 *
 * @fires config-changed - Fired with the config of the picked badge.
 */
export declare class HuiBadgePicker extends LitElement {
    hass?: HomeAssistant;
    suggestedBadges?: string[];
    private _badges;
    lovelace?: LovelaceConfig;
    badgePicked?: (badgeConf: LovelaceBadgeConfig) => void;
    private _filter;
    private _width?;
    private _height?;
    private _searchInput?;
    private _unusedEntities?;
    private _usedEntities?;
    focus(): Promise<void>;
    private _filterBadges;
    private _suggestedBadges;
    private _customBadges;
    private _otherBadges;
    protected render(): typeof nothing | TemplateResult<1>;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    protected firstUpdated(): void;
    private _loadBages;
    private _handleSearchChange;
    private _badgePicked;
    private _tryCreateBadgeElement;
    private _rebuildBadge;
    private _renderBadgeElement;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-badge-picker": HuiBadgePicker;
    }
}
