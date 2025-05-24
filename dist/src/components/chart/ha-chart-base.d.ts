import type { EChartsType } from "echarts/core";
import type { ECElementEvent } from "echarts/types/dist/shared";
import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { Themes } from "../../data/ws-themes";
import type { ECOption } from "../../resources/echarts";
import type { HomeAssistant } from "../../types";
import "../ha-icon-button";
import "../chips/ha-assist-chip";
export declare const MIN_TIME_BETWEEN_UPDATES: number;
export declare class HaChartBase extends LitElement {
    chart?: EChartsType;
    hass: HomeAssistant;
    data: ECOption["series"];
    options?: ECOption;
    height?: string;
    expandLegend?: boolean;
    extraComponents?: any[];
    _themes: Themes;
    private _isZoomed;
    private _zoomRatio;
    private _minutesDifference;
    private _hiddenDatasets;
    private _modifierPressed;
    private _isTouchDevice;
    private _lastTapTime?;
    private _resizeController;
    private _loading;
    private _reducedMotion;
    private _listeners;
    private _originalZrFlush?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderLegend;
    private _formatTimeLabel;
    private _setupChart;
    private _getDataZoomConfig;
    private _createOptions;
    private _createTheme;
    private _getSeries;
    private _getDefaultHeight;
    private _setChartOptions;
    private _handleClickZoom;
    private _handleZoomReset;
    private _legendClick;
    private _toggleExpandedLegend;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-chart-base": HaChartBase;
    }
    interface HASSDomEvents {
        "dataset-hidden": {
            name: string;
        };
        "dataset-unhidden": {
            name: string;
        };
        "chart-click": ECElementEvent;
    }
}
