export interface NewOverviewDialogParams {
    dismiss: () => void;
}
export declare const loadNewOverviewDialog: () => Promise<typeof import("./dialog-new-overview")>;
export declare const showNewOverviewDialog: (element: HTMLElement, params: NewOverviewDialogParams) => void;
