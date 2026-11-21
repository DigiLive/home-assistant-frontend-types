import { LitElement } from "lit";
import type { EntityNameSelector } from "../../data/selector";
import "../entity/ha-entity-name-picker";
export declare class HaSelectorEntityName extends LitElement {
    selector: EntityNameSelector;
    value?: string | string[];
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: {
        entity?: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-entity_name": HaSelectorEntityName;
    }
}
