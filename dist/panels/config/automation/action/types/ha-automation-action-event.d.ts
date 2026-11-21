import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/entity/ha-entity-picker";
import "../../../../../components/ha-yaml-editor";
import "../../../../../components/input/ha-input";
import type { EventAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaEventAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: EventAction;
    private _yamlEditor?;
    private _actionData?;
    static get defaultConfig(): EventAction;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _dataChanged;
    private _eventChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-event": HaEventAction;
    }
}
