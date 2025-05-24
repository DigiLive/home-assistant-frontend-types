import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-icon";
import "../ha-svg-icon";
export type TileIconImageStyle = "square" | "rounded-square" | "circle";
export declare const DEFAULT_TILE_ICON_BORDER_STYLE = "circle";
export declare class HaTileIcon extends LitElement {
    interactive: boolean;
    imageStyle?: TileIconImageStyle;
    imageUrl?: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-icon": HaTileIcon;
    }
}
