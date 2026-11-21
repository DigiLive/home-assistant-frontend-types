import { type CSSResultGroup, LitElement, nothing } from "lit";
import "../ha-switch";
import "../ha-svg-icon";
declare class HaMediaPlayerToggle extends LitElement {
    entityId: string;
    checked: boolean;
    disabled: boolean;
    private _stateObj?;
    private _entities;
    private _devices;
    private _areas;
    private _floors;
    private _i18n;
    private _computeDisplayData;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _handleChange;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-player-toggle": HaMediaPlayerToggle;
    }
}
export {};
