import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-icon-button";
import "../ha-switch";
/**
 * @element ha-entity-toggle
 *
 * @cssprop --ha-entity-toggle-switch-width - Width of the switch track. Defaults to `38px`.
 * @cssprop --ha-entity-toggle-switch-size - Height of the switch track. Defaults to `20px`.
 * @cssprop --ha-entity-toggle-switch-thumb-size - Size of the switch thumb. Defaults to `14px`.
 */
export declare class HaEntityToggle extends LitElement {
    private _api?;
    private _formatters?;
    private _localize;
    stateObj?: HassEntity;
    label?: string;
    private _isOn;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    willUpdate(changedProps: PropertyValues<this>): void;
    private _toggleChanged;
    private _turnOn;
    private _turnOff;
    private _callService;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-toggle": HaEntityToggle;
    }
}
