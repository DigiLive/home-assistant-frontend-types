import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { ExtEntityRegistryEntry } from "../../data/entity_registry";
import type { HomeAssistant } from "../../types";
declare class MoreInfoContent extends LitElement {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    protected render(): any;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-content": MoreInfoContent;
    }
}
export {};
