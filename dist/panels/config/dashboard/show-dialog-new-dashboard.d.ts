import type { LovelaceDashboardStrategyTypeId } from "../../../data/lovelace/config/strategy";
import type { LovelaceRawConfig } from "../../../data/lovelace/config/types";
/** Payload when the user picks a dashboard template in the new-dashboard dialog. */
export interface NewDashboardSelection {
    config: LovelaceRawConfig | undefined;
    /** Strategy id when the user chose a strategy (built-in or custom); omitted for an empty dashboard. */
    strategyType?: LovelaceDashboardStrategyTypeId;
}
export interface NewDashboardDialogParams {
    selectConfig: (selection: NewDashboardSelection) => void | Promise<void>;
}
export declare const loadNewDashboardDialog: () => Promise<typeof import("./dialog-new-dashboard")>;
export declare const showNewDashboardDialog: (element: HTMLElement, newDashboardDialogParams: NewDashboardDialogParams) => void;
