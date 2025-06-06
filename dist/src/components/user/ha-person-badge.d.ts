import { LitElement, nothing } from "lit";
import type { BasePerson } from "../../data/person";
import type { HomeAssistant } from "../../types";
declare class PersonBadge extends LitElement {
    hass: HomeAssistant;
    person?: BasePerson;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-person-badge": PersonBadge;
    }
}
export {};
