import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/chart/ha-sunburst-chart";
import "../../../components/ha-alert";
import "../../../components/ha-icon-button";
import "../../../components/ha-segmented-bar";
import "../../../components/ha-spinner";
import type { HassioHostInfo, HostDisksUsage } from "../../../data/hassio/host";
import type { HomeAssistant } from "../../../types";
export declare class StorageBreakdownChart extends LitElement {
    hass: HomeAssistant;
    hostInfo?: HassioHostInfo;
    storageInfo?: HostDisksUsage | null;
    private _chartType;
    protected render(): TemplateResult | typeof nothing;
    private _handleChartTypeChange;
    private _computeSpaceValues;
    private _computeSegments;
    private _transformToSunburstData;
    private _formatBytes;
    private _formatGB;
    private _formatLabel;
    private _bytesToGB;
    private _gbToBytes;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "storage-breakdown-chart": StorageBreakdownChart;
    }
}
