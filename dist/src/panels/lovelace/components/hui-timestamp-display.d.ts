import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { TimestampRenderingFormat } from "./types";
import "../../../components/ha-tooltip";
declare class HuiTimestampDisplay extends LitElement {
    ts?: Date;
    format?: TimestampRenderingFormat;
    capitalize: boolean;
    tooltip: boolean;
    private _relative?;
    private _locale;
    private _localize;
    private _config;
    private _connected?;
    private _interval?;
    private _uid;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProperties: PropertyValues<this>): void;
    private get _format();
    private get _formatType();
    private _startInterval;
    private _clearInterval;
    private _updateRelative;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-timestamp-display": HuiTimestampDisplay;
    }
}
export {};
