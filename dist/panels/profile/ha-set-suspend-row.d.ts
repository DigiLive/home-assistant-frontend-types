import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HASSDomEvent } from "../../common/dom/fire_event";
import "../../components/ha-switch";
import "../../components/item/ha-row-item";
import type { HomeAssistant } from "../../types";
declare global {
    interface HASSDomEvents {
        "hass-suspend-when-hidden": {
            suspend: HomeAssistant["suspendWhenHidden"];
        };
    }
    interface HTMLElementEventMap {
        "hass-suspend-when-hidden": HASSDomEvent<HASSDomEvents["hass-suspend-when-hidden"]>;
    }
}
declare class HaSetSuspendRow extends LitElement {
    hass: HomeAssistant;
    protected render(): TemplateResult;
    private _checkedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-set-suspend-row": HaSetSuspendRow;
    }
}
export {};
