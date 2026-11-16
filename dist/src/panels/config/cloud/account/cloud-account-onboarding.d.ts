import { LitElement } from "lit";
import type { TemplateResult } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-svg-icon";
import type { BackupConfig } from "../../../../data/backup";
import type { CloudStatusLoggedIn } from "../../../../data/cloud";
import type { HomeAssistant } from "../../../../types";
export declare class CloudAccountOnboarding extends LitElement {
    hass: HomeAssistant;
    cloudStatus: CloudStatusLoggedIn;
    backupConfig?: BackupConfig;
    protected render(): TemplateResult<1>;
    private _readyChip;
    private _panelCompleted;
    private _startSetup;
    private _onboardingPostpone;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-account-onboarding": CloudAccountOnboarding;
    }
    interface HASSDomEvents {
        "cloud-open-onboarding": undefined;
    }
}
