import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/chart/ha-network-graph";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-relative-time";
import "../../../../../components/ha-spinner";
import "../../../../../components/input/ha-input-search";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
export declare class LoRaWANTopologyPanel extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _snapshot?;
    private _error;
    private _search;
    private _unsubscribe?;
    private _topology;
    protected firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribe;
    private _nodeName;
    private _graphData;
    protected willUpdate(changed: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderSearch;
    private _searchChanged;
    private _tooltip;
    private _chartClicked;
    private _openDevice;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "lorawan-topology": LoRaWANTopologyPanel;
    }
}
