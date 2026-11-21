import { LitElement, nothing } from "lit";
import type { PropertyValues } from "lit";
import "../../../../components/ha-marquee-text";
import type { ClockCardConfig } from "../types";
export declare class HuiClockCardDigital extends LitElement {
    config?: ClockCardConfig;
    private _locale?;
    private _serverTimeZone?;
    private _dateTimeFormat?;
    private _timeHour?;
    private _timeMinute?;
    private _timeSecond?;
    private _timeAmPm?;
    private _date?;
    private _tickInterval?;
    private _lastDateMinute?;
    private _timeZone?;
    private _language?;
    private _initDate;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _startTick;
    private _stopTick;
    private _tick;
    private _updateDate;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-clock-card-digital": HuiClockCardDigital;
    }
}
