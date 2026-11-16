import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "./ha-more-info-history";
import "./ha-more-info-logbook";
export declare class MoreInfoHistoryAndLogbook extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-history-and-logbook": MoreInfoHistoryAndLogbook;
    }
}
