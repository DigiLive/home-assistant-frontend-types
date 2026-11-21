import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../layouts/hass-error-screen";
import "../../layouts/hass-loading-screen";
import type { HomeAssistant, PanelInfo, Route } from "../../types";
import "./hui-root";
interface LovelacePanelConfig {
    mode: "yaml" | "storage";
}
export declare class LovelacePanel extends LitElement {
    panel?: PanelInfo<LovelacePanelConfig | undefined>;
    hass?: HomeAssistant;
    narrow: boolean;
    route?: Route;
    private _panelState;
    private _errorMsg?;
    private lovelace?;
    private _ignoreNextUpdateEvent;
    private _fetchConfigOnConnect;
    private _unsubUpdates?;
    private _loading;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult | undefined;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    private _debounceRegenerateStrategy;
    private _regenerateStrategyConfig;
    private _handleConnectionStatus;
    private _subscribeUpdates;
    private _closeEditor;
    private _lovelaceChanged;
    get urlPath(): string;
    private _forceFetchConfig;
    private _fetchConfig;
    private _normalizeLovelaceConfig;
    private _setLovelaceConfig;
    private _generateDefaultConfig;
    private _updateLovelace;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-lovelace": LovelacePanel;
    }
}
export {};
