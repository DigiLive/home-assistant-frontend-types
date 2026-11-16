import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { ConfirmableRowConfig, LovelaceRow } from "./types";
declare class HuiLockEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ConfirmableRowConfig): void;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _callService;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-lock-entity-row": HuiLockEntityRow;
    }
}
export {};
