import type { NumericStateCondition } from "../../../common/validate-condition";
import { HaCardConditionNumericState } from "./ha-card-condition-numeric_state";
export declare class HaCardConditionNumericStateNoEntity extends HaCardConditionNumericState {
    static get defaultConfig(): NumericStateCondition;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-numeric_state-no_entity": HaCardConditionNumericStateNoEntity;
    }
}
