import type { BackupConfig } from "../../../../data/backup";
import type { CloudOnboardingItem, CloudStatusLoggedIn } from "../../../../data/cloud";
export declare const onboardingPanelCompleted: (panel: CloudOnboardingItem, cloudStatus: CloudStatusLoggedIn, backupConfig?: BackupConfig) => boolean;
export declare const onboardingComplete: (cloudStatus: CloudStatusLoggedIn, backupConfig?: BackupConfig) => boolean;
