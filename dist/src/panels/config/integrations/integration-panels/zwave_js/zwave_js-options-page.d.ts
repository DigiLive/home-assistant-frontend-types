import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/list/ha-list-base";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
declare class ZWaveJSOptionsPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    configEntryId: string;
    private _network?;
    private _status?;
    protected firstUpdated(): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
    private _rebuildNetworkRoutesClicked;
    private _removeNodeClicked;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-options-page": ZWaveJSOptionsPage;
    }
}
export {};
