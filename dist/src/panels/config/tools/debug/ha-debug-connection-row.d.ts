import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/item/ha-list-item-base";
import "../../../../components/ha-switch";
import type { HomeAssistant } from "../../../../types";
declare class HaDebugConnectionRow extends LitElement {
    hass: HomeAssistant;
    protected render(): TemplateResult;
    private _checkedChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-debug-connection-row": HaDebugConnectionRow;
    }
}
export {};
