import { LitElement, nothing } from "lit";
import type { CoverEntity } from "../data/cover";
import "./ha-icon-button";
declare class HaCoverTiltControls extends LitElement {
    private _localize;
    private _api;
    stateObj: CoverEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _onOpenTiltTap;
    private _onCloseTiltTap;
    private _onStopTiltTap;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-cover-tilt-controls": HaCoverTiltControls;
    }
}
export {};
