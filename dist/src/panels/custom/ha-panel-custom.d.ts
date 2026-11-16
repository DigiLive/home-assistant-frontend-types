import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { NavigateOptions } from "../../common/navigate";
import type { CustomPanelInfo } from "../../data/panel_custom";
import type { HomeAssistant, Route } from "../../types";
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-custom": HaPanelCustom;
    }
    interface Window {
        customPanel: HaPanelCustom | undefined;
    }
}
export declare class HaPanelCustom extends ReactiveElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    panel: CustomPanelInfo;
    private _setProperties?;
    private _wasDisconnected;
    private _syncSafeArea;
    protected createRenderRoot(): this;
    navigate: (path: string, options?: NavigateOptions) => Promise<boolean>;
    registerIframe(initialize: any, setProperties: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleResize;
    private _syncSafeAreaToIframe;
    protected update(changedProps: PropertyValues<this>): void;
    private _cleanupPanel;
    private _createPanel;
}
