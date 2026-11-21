import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-spinner";
import "../../../../components/ha-switch";
import "../../../../components/item/ha-row-item";
import type { CloudStatusLoggedIn } from "../../../../data/cloud";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
export declare class CloudWebhooks extends LitElement {
    hass?: HomeAssistant;
    narrow: boolean;
    cloudStatus?: CloudStatusLoggedIn;
    private _cloudHooks?;
    private _customHooks?;
    private _mobileHooks?;
    private _progress;
    connectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues<this>): void;
    private _renderHookRow;
    private _showDialog;
    private _handleManageButton;
    private _enableWebhook;
    private _disableWebhook;
    private _fetchData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-webhooks": CloudWebhooks;
    }
}
