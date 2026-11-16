import type { LocalizeFunc } from "../../../common/translations/localize";
import type { Lovelace } from "../types";
import type { LovelacePath } from "./lovelace-path";
export interface DeleteCardParams {
    path: LovelacePath;
    silent: boolean;
}
export declare function performDeleteCard(localize: LocalizeFunc, lovelace: Lovelace, params: DeleteCardParams): Promise<boolean>;
