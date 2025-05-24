export interface EditSidebarDialogParams {
    saveCallback: (order: string[], hidden: string[]) => void;
}
export declare const loadEditSidebarDialog: () => Promise<typeof import("./dialog-edit-sidebar")>;
export declare const showEditSidebarDialog: (element: HTMLElement, dialogParams: EditSidebarDialogParams) => void;
