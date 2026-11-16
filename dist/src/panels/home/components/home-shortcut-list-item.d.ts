import { LitElement, nothing, type PropertyValues } from "lit";
import "../../../components/ha-icon";
import "../../../components/ha-icon-button";
import "../../../components/ha-settings-row";
import "../../../components/ha-svg-icon";
import type { CustomShortcutItem } from "../../../data/home_shortcuts";
import type { HomeAssistant } from "../../../types";
declare global {
    interface HASSDomEvents {
        "edit-shortcut": {
            index: number;
        };
        "delete-shortcut": {
            index: number;
        };
    }
    interface HTMLElementTagNameMap {
        "home-shortcut-list-item": HomeShortcutListItem;
    }
}
export declare class HomeShortcutListItem extends LitElement {
    hass: HomeAssistant;
    item: CustomShortcutItem;
    index: number;
    private _navInfo;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _edit;
    private _delete;
    static styles: import("lit").CSSResult;
}
