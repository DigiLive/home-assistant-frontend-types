import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-floor-icon";
import "../../../../components/ha-icon";
import "../../../../components/ha-spinner";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
export declare class HaMoreInfoViewVacuumCleanAreas extends LitElement {
    hass: HomeAssistant;
    params: {
        entityId: string;
    };
    private _mappedHierarchy?;
    private _selectedAreaIds;
    private _loading;
    private _error?;
    private _submitting;
    protected firstUpdated(): void;
    private _loadAreas;
    private _toggleArea;
    private _startCleaning;
    private _openSegmentMapping;
    private _getMappedSections;
    private _renderSection;
    private _renderAreaCard;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-view-vacuum-clean-areas": HaMoreInfoViewVacuumCleanAreas;
    }
}
