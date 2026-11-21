export interface VacuumSegmentMappingDialogParams {
    entityId: string;
}
export declare const loadVacuumSegmentMappingDialog: () => Promise<typeof import("./dialog-vacuum-segment-mapping")>;
export declare const showVacuumSegmentMappingDialog: (element: HTMLElement, params: VacuumSegmentMappingDialogParams) => void;
