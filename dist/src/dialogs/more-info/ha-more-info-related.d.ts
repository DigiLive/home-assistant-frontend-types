import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-floor-icon";
import "../../components/ha-icon";
import "../../components/ha-icon-next";
import "../../components/ha-label";
import "../../components/ha-related-items";
import "../../components/ha-svg-icon";
import "../../components/item/ha-list-item-button";
import "../../components/item/ha-list-item-value";
import "../../components/list/ha-grouped-list";
import type { ExtEntityRegistryEntry } from "../../data/entity/entity_registry";
import type { HomeAssistant } from "../../types";
interface RelatedViewParams {
    entityId: string;
}
declare class HaMoreInfoRelated extends LitElement {
    hass: HomeAssistant;
    entry?: ExtEntityRegistryEntry | null;
    params?: RelatedViewParams;
    private _stateObj?;
    private _labels?;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderEntries;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-related": HaMoreInfoRelated;
    }
}
export {};
