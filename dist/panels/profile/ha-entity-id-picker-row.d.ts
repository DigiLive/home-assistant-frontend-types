import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-alert";
import "../../components/ha-card";
import "../../components/ha-switch";
import "../../components/item/ha-row-item";
import type { CoreFrontendUserData } from "../../data/frontend";
import type { HomeAssistant } from "../../types";
declare class EntityIdPickerRow extends LitElement {
    hass: HomeAssistant;
    coreUserData?: CoreFrontendUserData;
    private _error?;
    protected render(): TemplateResult;
    private _toggled;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-id-picker-row": EntityIdPickerRow;
    }
}
export {};
