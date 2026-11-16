import type { SecurityFrontendSystemData } from "../../../data/frontend";
export interface EditSecurityDialogParams {
    config: SecurityFrontendSystemData;
    saveConfig: (config: SecurityFrontendSystemData) => Promise<void>;
}
export declare const loadEditSecurityDialog: () => Promise<typeof import("./dialog-edit-security")>;
export declare const showEditSecurityDialog: (element: HTMLElement, params: EditSecurityDialogParams) => void;
