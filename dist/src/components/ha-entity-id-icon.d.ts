import { LitElement } from "lit";
import "./ha-domain-icon";
import "./ha-state-icon";
export declare class HaEntityIdIcon extends LitElement {
    private stateObj?;
    entityId: string;
    stateTitle: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-id-icon": HaEntityIdIcon;
    }
}
