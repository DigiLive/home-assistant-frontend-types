import "@home-assistant/webawesome/dist/components/divider/divider";
import { LitElement } from "lit";
import "../../../components/item/ha-list-item-button";
import "../../../components/list/ha-list-base";
import type { DataEntryFlowProgress } from "../../../data/data_entry_flow";
import type { Brand, Integration } from "../../../data/integrations";
import type { HomeAssistant } from "../../../types";
import "./ha-integration-list-item";
declare class HaDomainIntegrations extends LitElement {
    hass: HomeAssistant;
    domain: string;
    integration?: Brand | Integration;
    flowsInProgress?: DataEntryFlowProgress[];
    navigateToResult: boolean;
    showManageLink: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _integrationPicked;
    private _flowInProgressPicked;
    private _manageDiscovered;
    private _standardPicked;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-domain-integrations": HaDomainIntegrations;
    }
}
export {};
