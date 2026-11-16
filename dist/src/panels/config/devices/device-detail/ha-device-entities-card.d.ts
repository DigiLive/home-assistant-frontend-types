import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-icon";
import "../../../../components/ha-list";
import "../../../../components/ha-list-item";
import type { HomeAssistant } from "../../../../types";
import type { EntityRegistryStateEntry } from "../ha-config-device-page";
export declare class HaDeviceEntitiesCard extends LitElement {
    header: string;
    deviceName: string;
    hass: HomeAssistant;
    entities: EntityRegistryStateEntry[];
    showHidden: boolean;
    protected render(): TemplateResult;
    private _toggleShowHidden;
    private _renderEntities;
    private _renderEntity;
    private _renderUnavailableEntity;
    private _openEditEntry;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-entities-card": HaDeviceEntitiesCard;
    }
}
