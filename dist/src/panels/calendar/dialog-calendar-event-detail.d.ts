import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/entity/state-info";
import "../../components/ha-alert";
import "../../components/ha-button";
import "../../components/ha-dialog-footer";
import "../../components/ha-dialog";
import type { HomeAssistant } from "../../types";
import type { CalendarEventDetailDialogParams } from "./show-dialog-calendar-event-detail";
declare class DialogCalendarEventDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _calendarId?;
    private _submitting;
    private _error?;
    private _data;
    showDialog(params: CalendarEventDetailDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _dialogClosed;
    private _renderRRuleAsText;
    private _formatDateRange;
    private _editEvent;
    private _deleteEvent;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-calendar-event-detail": DialogCalendarEventDetail;
    }
}
export {};
