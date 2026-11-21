import { LitElement } from "lit";
import "./ha-button";
import type { LawnMowerEntity } from "../data/lawn_mower";
declare class HaLawnMowerActionButton extends LitElement {
    private _localize;
    private _formatters?;
    private _api;
    stateObj: LawnMowerEntity;
    render(): import("lit-html").TemplateResult<1>;
    callService(ev: any): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-lawn_mower-action-button": HaLawnMowerActionButton;
    }
}
export {};
