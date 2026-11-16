import { LitElement, nothing } from "lit";
import "../../../../components/ha-icon-button";
import type { HomeAssistant } from "../../../../types";
export declare class HaMoreInfoViewVacuumCleanAreasHeaderAction extends LitElement {
    hass: HomeAssistant;
    params: {
        entityId: string;
    };
    private _hasMapping;
    protected firstUpdated(): void;
    private _loadMapping;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleClick;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-view-vacuum-clean-areas-header-action": HaMoreInfoViewVacuumCleanAreasHeaderAction;
    }
}
