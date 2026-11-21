import type { EnergyPreferences } from "../../../../data/energy";
export interface EnergyCustomiseDialogParams {
    preferences: EnergyPreferences;
    saveCallback?: () => void;
}
export declare const loadEnergyCustomiseDialog: () => Promise<typeof import("./dialog-energy-customise")>;
export declare const showEnergyCustomiseDialog: (element: HTMLElement, params: EnergyCustomiseDialogParams) => void;
