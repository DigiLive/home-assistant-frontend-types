import type { CSSResultGroup, TemplateResult } from "lit";
import "../../../components/ha-domain-icon";
import "../../../components/ha-icon-next";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import { HaListItemButton } from "../../../components/item/ha-list-item-button";
import type { IntegrationListItem } from "./dialog-add-integration";
export declare class HaIntegrationListItem extends HaListItemButton {
    integration: IntegrationListItem;
    private _localize;
    protected _renderInner(): TemplateResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-list-item": HaIntegrationListItem;
    }
}
