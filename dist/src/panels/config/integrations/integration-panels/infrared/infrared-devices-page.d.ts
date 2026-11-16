import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-relative-time";
import type { InfraredDevice } from "../../../../../data/infrared";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class InfraredDevicesPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    devices: InfraredDevice[];
    private _tabs;
    private _tableSettings;
    private _columns;
    private _data;
    protected render(): TemplateResult;
    private _handleRowClicked;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "infrared-devices-page": InfraredDevicesPage;
    }
}
