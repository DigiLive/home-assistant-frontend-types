import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
declare class HaAttributeValue extends LitElement {
    private _formatters?;
    stateObj?: HassEntity;
    attribute: string;
    hideUnit: boolean;
    private _yamlTask;
    protected render(): string | typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-attribute-value": HaAttributeValue;
    }
}
export {};
