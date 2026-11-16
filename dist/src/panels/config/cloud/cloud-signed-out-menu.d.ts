import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
export declare class CloudSignedOutMenu extends LitElement {
    hass: HomeAssistant;
    protected render(): TemplateResult;
    private _handleMenuAction;
    private _deleteCloudData;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-signed-out-menu": CloudSignedOutMenu;
    }
}
