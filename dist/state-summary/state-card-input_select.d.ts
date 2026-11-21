import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-badge";
import "../components/ha-control-select-menu";
import type { InputSelectEntity } from "../data/input_select";
declare class StateCardInputSelect extends LitElement {
    stateObj: InputSelectEntity;
    private _formatEntityName?;
    private _api;
    protected render(): TemplateResult;
    private _selectedOptionChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-input_select": StateCardInputSelect;
    }
}
export {};
