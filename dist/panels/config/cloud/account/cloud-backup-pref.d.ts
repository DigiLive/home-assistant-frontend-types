import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-spinner";
import "../../../../components/ha-svg-icon";
import "../../../../components/item/ha-list-item-base";
import "../../../../components/list/ha-list-base";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
export declare class CloudBackupPref extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _backupConfig?;
    private _backupInfo?;
    private _loaded;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderInfoCard;
    private _renderStatusCard;
    private _renderSetupCard;
    protected willUpdate(changedProps: any): void;
    private _fetchData;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-backup-pref": CloudBackupPref;
    }
}
