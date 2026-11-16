import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import type { UpdateEntity } from "../data/update";
export declare class StateCardUpdate extends LitElement {
    private _i18n?;
    private _formatEntityState?;
    stateObj: UpdateEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-update": StateCardUpdate;
    }
}
