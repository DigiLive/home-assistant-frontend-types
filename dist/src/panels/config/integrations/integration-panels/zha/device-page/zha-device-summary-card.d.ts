import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../../components/ha-button";
import "../../../../../../components/ha-card";
import "../../../../../../components/ha-dropdown";
import "../../../../../../components/ha-dropdown-item";
import "../../../../../../components/ha-icon-button";
import "../../../../../../components/ha-relative-time";
import "../../../../../../components/ha-svg-icon";
import type { ZHADevice } from "../../../../../../data/zha";
export declare class ZHADeviceSummaryCard extends LitElement {
    device?: ZHADevice;
    private _api;
    private _config;
    private _i18n;
    private _processingRemove;
    protected render(): TemplateResult | typeof nothing;
    private _renderDeviceActionMenu;
    private _renderSummaryItem;
    private _renderLastSeenSummaryItem;
    private _reconfigureDevice;
    private _addViaDevice;
    private _viewNetwork;
    private _handleDeviceActionSelected;
    private _removeDevice;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-summary-card": ZHADeviceSummaryCard;
    }
}
