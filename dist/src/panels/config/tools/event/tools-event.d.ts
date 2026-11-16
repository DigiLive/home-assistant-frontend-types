import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-yaml-editor";
import "../../../../components/input/ha-input";
import type { HomeAssistant } from "../../../../types";
import "./event-subscribe-card";
import "./events-list";
declare class HaPanelDevEvent extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _eventType;
    private _eventData;
    private _isValid;
    private _selectedEventType;
    protected render(): TemplateResult;
    private _eventSelected;
    private _eventTypeChanged;
    private _yamlChanged;
    private _fireEvent;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "tools-event": HaPanelDevEvent;
    }
}
export {};
