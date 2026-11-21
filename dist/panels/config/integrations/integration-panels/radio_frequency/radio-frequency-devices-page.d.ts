import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-relative-time";
import { type RadioFrequencyTransmitter } from "../../../../../data/radio_frequency";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class RadioFrequencyDevicesPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    transmitters: RadioFrequencyTransmitter[];
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
        "radio-frequency-devices-page": RadioFrequencyDevicesPage;
    }
}
