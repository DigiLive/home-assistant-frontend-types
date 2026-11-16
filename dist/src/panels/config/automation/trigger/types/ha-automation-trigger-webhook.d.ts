import "@home-assistant/webawesome/dist/components/divider/divider";
import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-dropdown";
import "../../../../../components/ha-dropdown-item";
import "../../../../../components/ha-icon-button";
import "../../../../../components/input/ha-input";
import type { WebhookTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaWebhookTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: WebhookTrigger;
    disabled: boolean;
    private _config?;
    private _unsub?;
    static get defaultConfig(): WebhookTrigger;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _generateWebhookId;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _localOnlyChanged;
    private _allowedMethodsChanged;
    private _copyUrl;
    private _handleDropdownSelect;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-webhook": HaWebhookTrigger;
    }
}
