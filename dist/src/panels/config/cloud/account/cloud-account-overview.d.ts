import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-svg-icon";
import "../../../../components/item/ha-list-item-base";
import "../../../../components/item/ha-list-item-button";
import "../../../../components/list/ha-list-base";
import "../../../../components/list/ha-list-nav";
import type { BackupConfig } from "../../../../data/backup";
import type { CloudStatusLoggedIn, SubscriptionInfo } from "../../../../data/cloud";
import type { Webhook } from "../../../../data/webhook";
import type { HomeAssistant } from "../../../../types";
export declare class CloudAccountOverview extends LitElement {
    hass: HomeAssistant;
    cloudStatus: CloudStatusLoggedIn;
    subscription?: SubscriptionInfo;
    backupConfig?: BackupConfig;
    webhooks?: Webhook[];
    private _emailRevealed;
    protected render(): TemplateResult;
    private _renderTopCard;
    private _renderSubscriptionState;
    private _subscriptionDetail;
    private _renderAccountCard;
    private _renderFeaturesCard;
    private _featureRow;
    private get _subscriptionActive();
    private _statusLine;
    private _onOffStatus;
    private _remoteStatus;
    private _alexaGoogleStatus;
    private _renderBackupStatus;
    private get _accountState();
    private get _renewalDate();
    private _toggleEmail;
    private _signOut;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-account-overview": CloudAccountOverview;
    }
    interface HASSDomEvents {
        "cloud-sign-out": undefined;
    }
}
