import type { LabPreviewFeature } from "../../../data/labs";
export interface LabsPreviewFeatureEnableDialogParams {
    preview_feature: LabPreviewFeature;
    previewFeatureId: string;
    onConfirm: (createBackup: boolean) => void;
}
export declare const loadLabsPreviewFeatureEnableDialog: () => Promise<typeof import("./dialog-labs-preview-feature-enable")>;
export declare const showLabsPreviewFeatureEnableDialog: (element: HTMLElement, params: LabsPreviewFeatureEnableDialogParams) => void;
