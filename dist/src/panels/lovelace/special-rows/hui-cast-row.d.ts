import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-icon";
import type { HomeAssistant } from "../../../types";
import type { CastConfig, LovelaceRow } from "../entity-rows/types";
declare class HuiCastRow extends LitElement implements LovelaceRow {
    hass: HomeAssistant;
    private _config?;
    private _castManager?;
    private _noHTTPS;
    private _removeCastListeners?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setConfig(config: CastConfig): void;
    protected shouldUpdate(changedProperties: PropertyValues<this>): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    private _attachCastListeners;
    private _detachCastListeners;
    private _sendLovelace;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cast-row": HuiCastRow;
    }
}
export {};
