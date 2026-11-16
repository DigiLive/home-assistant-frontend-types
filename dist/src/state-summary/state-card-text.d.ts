import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-badge";
import "../components/input/ha-input";
import type { TextEntity } from "../data/text";
declare class StateCardText extends LitElement {
    stateObj: TextEntity;
    private _formatEntityName?;
    private _localize;
    private _api;
    protected render(): TemplateResult;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-text": StateCardText;
    }
}
export {};
