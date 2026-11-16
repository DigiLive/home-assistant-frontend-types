import type { LovelaceBadgeConfig } from "../../../../data/lovelace/config/badge";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
export interface EditBadgeDialogParams {
    lovelaceConfig: LovelaceConfig;
    saveBadgeConfig: (config: LovelaceBadgeConfig) => void;
    badgeConfig: LovelaceBadgeConfig;
    isNew?: boolean;
}
export declare const importEditBadgeDialog: () => Promise<typeof import("./hui-dialog-edit-badge")>;
export declare const showEditBadgeDialog: (element: HTMLElement, editBadgeDialogParams: EditBadgeDialogParams) => void;
