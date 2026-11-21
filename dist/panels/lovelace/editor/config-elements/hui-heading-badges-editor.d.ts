import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dropdown";
import "../../../../components/ha-dropdown-item";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceHeadingBadgeConfig } from "../../heading-badges/types";
declare global {
    interface HASSDomEvents {
        "edit-heading-badge": {
            index: number;
        };
        "heading-badges-changed": {
            badges: LovelaceHeadingBadgeConfig[];
        };
    }
}
export declare class HuiHeadingBadgesEditor extends LitElement {
    hass: HomeAssistant;
    badges?: LovelaceHeadingBadgeConfig[];
    private _badgesKeys;
    private _getKey;
    private _getBadgeTypeLabel;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderBadgeItem;
    private _renderEntityBadge;
    private _renderButtonBadge;
    private _renderUnknownBadge;
    private _addBadge;
    private _badgeMoved;
    private _removeBadge;
    private _editBadge;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-heading-badges-editor": HuiHeadingBadgesEditor;
    }
}
