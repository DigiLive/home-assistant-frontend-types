import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-attribute-value";
import "../../components/ha-svg-icon";
import "../../components/item/ha-list-item-button";
import "../../components/item/ha-list-item-value";
import "../../components/list/ha-grouped-list";
import type { ExtEntityRegistryEntry } from "../../data/entity/entity_registry";
import type { HomeAssistant } from "../../types";
import "../../components/ha-yaml-editor";
interface DetailsViewParams {
    entityId: string;
}
declare class HaMoreInfoDetails extends LitElement {
    hass: HomeAssistant;
    entry?: ExtEntityRegistryEntry | null;
    params?: DetailsViewParams;
    yamlMode: boolean;
    private _stateObj?;
    private _copiedValue?;
    private _copyFeedbackTimeout?;
    disconnectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _getDetailData;
    private _formatTimestamp;
    private _renderEntries;
    private _copyValue;
    private _renderAttributes;
    private _renderFeatures;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-details": HaMoreInfoDetails;
    }
}
export {};
