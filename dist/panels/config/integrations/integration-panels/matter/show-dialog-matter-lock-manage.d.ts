export interface MatterLockManageDialogParams {
    entity_id: string;
}
export declare const loadMatterLockManageDialog: () => Promise<typeof import("./dialog-matter-lock-manage")>;
export declare const showMatterLockManageDialog: (element: HTMLElement, dialogParams: MatterLockManageDialogParams) => void;
