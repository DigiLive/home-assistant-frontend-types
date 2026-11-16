import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/state-badge";
import "../../../components/ha-relative-time";
import "../../../components/ha-tooltip";
import type { HomeAssistant } from "../../../types";
import type { EntitiesCardEntityConfig } from "../cards/types";
import "../../../state-display/state-display";
export declare class HuiGenericEntityRow extends LitElement {
    hass?: HomeAssistant;
    config?: EntitiesCardEntityConfig;
    secondaryText?: string;
    hideName: boolean;
    catchInteraction?: any;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues<this>): void;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-generic-entity-row": HuiGenericEntityRow;
    }
}
