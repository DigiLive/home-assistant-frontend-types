import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-spinner";
import "../../../../components/ha-vacuum-segment-area-mapper";
import type { HomeAssistant } from "../../../../types";
export declare class HaMoreInfoViewVacuumSegmentMapping extends LitElement {
    hass: HomeAssistant;
    params: {
        entityId: string;
    };
    private _dirtyState?;
    private _areaMapping?;
    private _submitting;
    private _error?;
    private _entry?;
    protected firstUpdated(): void;
    private _loadCurrentMapping;
    private _valueChanged;
    private _save;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-view-vacuum-segment-mapping": HaMoreInfoViewVacuumSegmentMapping;
    }
}
