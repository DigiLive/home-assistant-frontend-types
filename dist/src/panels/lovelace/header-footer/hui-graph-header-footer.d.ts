import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import type { HomeAssistant } from "../../../types";
import "../components/hui-graph-base";
import type { LovelaceHeaderFooter, LovelaceHeaderFooterEditor } from "../types";
import type { GraphHeaderFooterConfig } from "./types";
export declare class HuiGraphHeaderFooter extends LitElement implements LovelaceHeaderFooter {
    static getConfigElement(): Promise<LovelaceHeaderFooterEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): GraphHeaderFooterConfig;
    hass?: HomeAssistant;
    type: "header" | "footer";
    protected _config?: GraphHeaderFooterConfig;
    private _coordinates?;
    private _loading;
    private _error?;
    private _history?;
    private _interval?;
    private _subscribed?;
    getCardSize(): number;
    setConfig(config: GraphHeaderFooterConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleClick;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribeHistory;
    private _setLoadingCoordinates;
    private _computeCoordinates;
    private _redrawGraph;
    private _setRedrawTimer;
    private _unsubscribeHistory;
    protected updated(changedProps: PropertyValues): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-graph-header-footer": HuiGraphHeaderFooter;
    }
}
