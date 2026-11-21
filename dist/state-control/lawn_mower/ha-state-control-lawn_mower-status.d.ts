import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LawnMowerEntity } from "../../data/lawn_mower";
export declare class HaStateControlLawnMowerStatus extends LitElement {
    stateObj: LawnMowerEntity;
    protected render(): TemplateResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-lawn_mower-status": HaStateControlLawnMowerStatus;
    }
}
