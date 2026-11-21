import type { Lovelace } from "../../types";
import type { LovelacePath } from "../lovelace-path";
export interface CreateSectionDialogParams {
    lovelace: Lovelace;
    containerPath: LovelacePath;
}
export declare const showCreateSectionDialog: (element: HTMLElement, params: CreateSectionDialogParams) => void;
export declare const showSelectSectionStrategyDialog: (element: HTMLElement, params: CreateSectionDialogParams) => void;
