import { LitElement } from "lit";
import "../../../../../components/entity/ha-entities-picker";
import "../../../../../components/entity/ha-entity-picker";
import "../../../../../components/radio/ha-radio-group";
import "../../../../../components/radio/ha-radio-option";
import type { ZoneTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaZoneTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: ZoneTrigger;
    disabled: boolean;
    static get defaultConfig(): ZoneTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _entityPicked;
    private _zonePicked;
    private _radioGroupPicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-zone": HaZoneTrigger;
    }
}
