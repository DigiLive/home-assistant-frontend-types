import type { LovelaceSectionRawConfig } from "../../../../data/lovelace/config/section";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { Lovelace } from "../../types";
import type { LovelacePath } from "../lovelace-path";
export interface EditSectionDialogParams {
    lovelace?: Lovelace;
    lovelaceConfig: LovelaceConfig;
    saveConfig: (config: LovelaceConfig) => void;
    path: LovelacePath;
    newSection?: LovelaceSectionRawConfig;
}
export declare const showEditSectionDialog: (element: HTMLElement, editSectionDialogParams: EditSectionDialogParams) => void;
