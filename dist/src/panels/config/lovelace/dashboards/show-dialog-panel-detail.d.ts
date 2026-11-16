import type { PanelMutableParams } from "../../../../data/panel";
export interface PanelDetailDialogParams {
    urlPath: string;
    title: string;
    icon?: string;
    requireAdmin: boolean;
    showInSidebar: boolean;
    isDefault: boolean;
    updatePanel: (updates: PanelMutableParams) => Promise<unknown>;
}
export declare const loadPanelDetailDialog: () => Promise<typeof import("./dialog-panel-detail")>;
export declare const showPanelDetailDialog: (element: HTMLElement, dialogParams: PanelDetailDialogParams) => void;
