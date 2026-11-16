import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-badge";
import "../components/ha-control-select-menu";
import type { SelectEntity } from "../data/select";
declare class StateCardSelect extends LitElement {
    stateObj: SelectEntity;
    private _formatters?;
    private _api;
    protected render(): TemplateResult;
    private _selectedOptionChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-select": StateCardSelect;
    }
}
export {};
