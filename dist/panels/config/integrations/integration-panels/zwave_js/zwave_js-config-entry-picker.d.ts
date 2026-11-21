import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-list";
import "../../../../../components/ha-list-item";
import "../../../../../layouts/hass-loading-screen";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
declare class ZWaveJSConfigEntryPicker extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _configEntries?;
    protected firstUpdated(changedProps: PropertyValues<this>): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fetchConfigEntries;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-config-entry-picker": ZWaveJSConfigEntryPicker;
    }
}
export {};
