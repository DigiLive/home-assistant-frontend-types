import type { HomeFrontendSystemData } from "../../../data/frontend";
export interface EditHomeDialogParams {
    config: HomeFrontendSystemData;
    saveConfig: (config: HomeFrontendSystemData) => Promise<void>;
}
export declare const loadEditHomeDialog: () => Promise<typeof import("./dialog-edit-home")>;
export declare const showEditHomeDialog: (element: HTMLElement, params: EditHomeDialogParams) => void;
