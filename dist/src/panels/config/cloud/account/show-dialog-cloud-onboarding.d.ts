import type { BackupConfig } from "../../../../data/backup";
import type { CloudStatusLoggedIn } from "../../../../data/cloud";
export interface CloudOnboardingDialogParams {
    cloudStatus: CloudStatusLoggedIn;
    backupConfig?: BackupConfig;
    onChanged?: () => void;
}
export declare const loadCloudOnboardingDialog: () => Promise<typeof import("./dialog-cloud-onboarding")>;
export declare const showCloudOnboardingDialog: (element: HTMLElement, dialogParams: CloudOnboardingDialogParams) => void;
