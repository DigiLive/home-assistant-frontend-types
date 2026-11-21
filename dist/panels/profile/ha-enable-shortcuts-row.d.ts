import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-switch";
import "../../components/item/ha-row-item";
import type { HomeAssistant } from "../../types";
declare class HaEnableShortcutsRow extends LitElement {
    hass: HomeAssistant;
    protected render(): TemplateResult;
    private _checkedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-enable-shortcuts-row": HaEnableShortcutsRow;
    }
}
export {};
