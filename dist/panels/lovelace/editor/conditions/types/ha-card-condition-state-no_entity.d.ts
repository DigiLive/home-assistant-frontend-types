import type { StateCondition } from "../../../common/validate-condition";
import { HaCardConditionState } from "./ha-card-condition-state";
export declare class HaCardConditionStateNoEntity extends HaCardConditionState {
    static get defaultConfig(): StateCondition;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-state-no_entity": HaCardConditionStateNoEntity;
    }
}
