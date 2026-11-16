import type { LocalizeFunc } from "../../../../common/translations/localize";
import type { EntitySelectorExtraOption } from "../../../../data/selector";
export declare const CURRENT_ENTITY_ID = "__current_entity__";
export declare const currentEntityOption: (localize: LocalizeFunc, currentEntityId: string, currentEntityName: string | undefined) => EntitySelectorExtraOption;
