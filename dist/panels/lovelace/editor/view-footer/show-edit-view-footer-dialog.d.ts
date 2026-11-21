import type { LovelaceViewFooterConfig } from "../../../../data/lovelace/config/view";
export interface EditViewFooterDialogParams {
    saveConfig: (config: LovelaceViewFooterConfig) => void;
    config: LovelaceViewFooterConfig;
}
export declare const showEditViewFooterDialog: (element: HTMLElement, dialogParams: EditViewFooterDialogParams) => void;
