import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-switch";
import "../../../../components/item/ha-list-item-base";
import type { HomeAssistant } from "../../../../types";
declare class HaDebugDisableViewTransitionRow extends LitElement {
    hass: HomeAssistant;
    private _disabled;
    protected render(): TemplateResult;
    private _checkedChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-debug-disable-view-transition-row": HaDebugDisableViewTransitionRow;
    }
}
export {};
