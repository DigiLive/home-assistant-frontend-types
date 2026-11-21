import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { ActionHandlerOptions } from "../../data/lovelace/action_handler";
import "../ha-icon";
import "../ha-svg-icon";
/**
 * Home Assistant tile icon component
 *
 * @element ha-tile-icon
 *
 * @summary
 * A tile icon component, used in tile card in Home Assistant to display an icon or image.
 *
 * @slot - Additional content (for example, a badge).
 * @slot icon - The icon container (usually for custom icons like ha-state-icon).
 *
 * @cssprop --ha-tile-icon-border-radius - The border radius of the tile icon. defaults to `var(--ha-border-radius-pill)`.
 *
 * @attr {string} image-url - The URL of the image to display instead of an icon.
 * @attr {string} accessible-label - The accessible name of the icon button when it is interactive.
 */
export declare class HaTileIcon extends LitElement {
    interactive: boolean;
    imageUrl?: string;
    icon?: string;
    iconPath?: string;
    accessibleLabel?: string;
    actionHandlerOptions?: ActionHandlerOptions;
    private _renderIcon;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-icon": HaTileIcon;
    }
}
