import type { ZHAGroup } from "../../../../../data/zha";
export interface ZHAAddGroupMembersDialogParams {
    groupId: number;
    groupName: string;
    devicesAddedCallback: (group: ZHAGroup) => void;
}
export declare const loadZHAAddGroupMembersDialog: () => Promise<typeof import("./dialog-zha-add-group-members")>;
export declare const showZHAAddGroupMembersDialog: (element: HTMLElement, params: ZHAAddGroupMembersDialogParams) => void;
