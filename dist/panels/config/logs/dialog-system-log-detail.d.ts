import "../../../components/skeleton/ha-skeleton-text";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import "../../../components/ha-dialog";
import type { SystemLogDetailDialogParams } from "./show-dialog-system-log-detail";
declare class DialogSystemLogDetail extends LitElement {
    private _api;
    private _config;
    private _connection;
    private _i18n;
    private _params?;
    private _manifest?;
    private _installationType?;
    private _open;
    private _contents?;
    private _reportUrl;
    private _fetchingInstallationType;
    showDialog(params: SystemLogDetailDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private get isCustomIntegration();
    private _fetchManifest;
    private _fetchInstallationType;
    private _copyLog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-system-log-detail": DialogSystemLogDetail;
    }
}
export {};
