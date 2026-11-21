import "../../../../components/skeleton/ha-skeleton";
import "../../../../components/skeleton/ha-skeleton-text";
import { LitElement, nothing } from "lit";
import "../../../../components/animation/ha-fade-in";
import "../../../../components/ha-switch";
import "../../../../components/item/ha-row-item";
import type { UpdateEntity } from "../../../../data/update";
export declare class HaMoreInfoUpdateBackup extends LitElement {
    stateObj?: UpdateEntity;
    disabled: boolean;
    private _localize;
    private _locale;
    private _backupConfigLoading;
    private _backupConfig?;
    private _createBackupLoading;
    private _createBackup;
    private _entitySources?;
    private _api;
    private _states;
    private _config;
    get createBackup(): boolean;
    protected firstUpdated(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _setupBackup;
    private _fetchUpdateBackupConfig;
    private _fetchBackupConfig;
    private _isHaOrOsUpdate;
    private _computeCreateBackupTexts;
    private _createBackupChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-update-backup": HaMoreInfoUpdateBackup;
    }
}
