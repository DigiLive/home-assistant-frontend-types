import type { MatterLockInfo, MatterLockUser } from "../../../../../data/matter-lock";
export interface MatterLockUserEditDialogParams {
    entity_id: string;
    lockInfo: MatterLockInfo;
    user?: MatterLockUser;
    onSaved: () => void;
}
export declare const loadMatterLockUserEditDialog: () => Promise<typeof import("./dialog-matter-lock-user-edit")>;
export declare const showMatterLockUserEditDialog: (element: HTMLElement, dialogParams: MatterLockUserEditDialogParams) => void;
