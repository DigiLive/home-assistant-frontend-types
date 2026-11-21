import { LitElement } from "lit";
import type { UiStateContentSelector } from "../../data/selector";
import "../entity/ha-entity-state-content-picker";
export declare class HaSelectorUiStateContent extends LitElement {
    selector: UiStateContentSelector;
    value?: string | string[];
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: {
        filter_entity?: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-ui_state_content": HaSelectorUiStateContent;
    }
}
