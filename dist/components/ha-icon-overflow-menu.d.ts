import "@home-assistant/webawesome/dist/components/divider/divider";
import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "./ha-dropdown";
import "./ha-dropdown-item";
import "./ha-icon-button";
import "./ha-svg-icon";
import "./ha-tooltip";
export interface IconOverflowMenuItem {
    [key: string]: any;
    path: string;
    label: string;
    narrowOnly?: boolean;
    disabled?: boolean;
    tooltip?: string;
    action: () => any;
    warning?: boolean;
    divider?: boolean;
}
export declare class HaIconOverflowMenu extends LitElement {
    private _localize;
    items: IconOverflowMenuItem[];
    narrow: boolean;
    label?: string;
    protected render(): TemplateResult | typeof nothing;
    protected _handleIconOverflowMenuOpened(e: any): void;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-overflow-menu": HaIconOverflowMenu;
    }
}
