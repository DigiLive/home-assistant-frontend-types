export interface AreaAddToDialogParams {
    areaId: string;
    entityIds: string[];
    canCreateScene: boolean;
}
export declare const loadAreaAddToDialog: () => Promise<typeof import("./dialog-area-add-to")>;
export declare const showAreaAddToDialog: (element: HTMLElement, params: AreaAddToDialogParams) => void;
