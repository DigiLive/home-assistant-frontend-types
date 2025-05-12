import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { ClockCardConfig } from "./types";
export declare class HuiClockCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): ClockCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _dateTimeFormat?;
    private _timeHour?;
    private _timeMinute?;
    private _timeSecond?;
    private _timeAmPm?;
    private _tickInterval?;
    setConfig(config: ClockCardConfig): void;
    private _initDate;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _startTick;
    private _stopTick;
    private _tick;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-clock-card": HuiClockCard;
    }
}
