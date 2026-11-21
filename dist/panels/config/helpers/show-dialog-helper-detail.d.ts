import type { HelperFormItem } from "./const";
export declare const loadHelperDetailDialog: () => Promise<typeof import("./dialog-helper-detail")>;
export interface ShowDialogHelperDetailParams {
    domain?: string;
    item?: HelperFormItem;
    dialogClosedCallback?: (params: {
        flowFinished: boolean;
        entryId?: string;
        entityId?: string;
    }) => void;
}
export declare const showHelperDetailDialog: (element: HTMLElement, params: ShowDialogHelperDetailParams) => void;
