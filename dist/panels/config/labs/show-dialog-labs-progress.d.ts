export interface LabsProgressDialogParams {
    enabled: boolean;
}
export declare const loadLabsProgressDialog: () => Promise<typeof import("./dialog-labs-progress")>;
export declare const showLabsProgressDialog: (element: HTMLElement, dialogParams: LabsProgressDialogParams) => void;
export declare const closeLabsProgressDialog: () => Promise<boolean>;
